import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import { AnimatePresence } from 'framer-motion';
import Landing from './Landing';
import Chat from '../components/Chat';

const Home = ({ session, supabase }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!session);
  }, [session]);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <main className='bg-charcoal-600'>
      {loggedIn ? (
        <Chat supabase={supabase} />
      ) : (
        <Landing supabase={supabase} />
      )}

      {/* <button onClick={() => (modalOpen ? close() : open())}>Launch</button>
      <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
      >
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </AnimatePresence> */}
    </main>
  );
};

export default Home;
