import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Topbar from '../components/Topbar';
import { Message } from '../components/Message';
import Typebar from '../components/Typebar';
import useSupabase from '../lib/useSupabase';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import Settings from './Settings';
import Username from './Username';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { supabase, currentUser } = useSupabase();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    const getMessages = async () => {
      let { data: messages, error } = await supabase
        .from('message')
        .select('*');
      setMessages(messages);
    };

    getMessages();

    const setupMessageSubscription = async () => {
      await supabase
        .from('message')
        .on('INSERT', (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        })
        .subscribe();
    };

    setupMessageSubscription();
  }, []);

  if (!currentUser)
    return (
      <div className='flex justify-center items-center w-full h-screen bg-charcoal-500'>
        <h1 className='font-3xl text-white font-bold'>Loading...</h1>
      </div>
    );

  return (
    <div className='flex text-white h-screen relative'>
      <Dashboard />
      <div className='bg-charcoal-500 flex-1 flex flex-col'>
        <Topbar />
        <div className='flex-1 overflow-y-scroll'>
          <div className='w-full h-full flex items-end justify-center'>
            <p className='text-xs text-gray-300 bg-gray-700 px-4 py-2 rounded-3xl mb-4'>
              Start of your chat
            </p>
          </div>
        </div>
        {messages.map((message) => (
          <Message {...message} key={message.id} />
        ))}
        <Typebar />
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Chat;
