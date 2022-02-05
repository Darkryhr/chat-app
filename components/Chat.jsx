import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Topbar from '../components/Topbar';
import { Message } from '../components/Message';
import Typebar from '../components/Typebar';

const Chat = ({ supabase }) => {
  const [messages, setMessages] = useState([]);
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
  return (
    <div className='flex text-white h-screen'>
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
    </div>
  );
};

export default Chat;
