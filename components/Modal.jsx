import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import useSupabase from '../lib/useSupabase';

const Modal = ({ handleClose }) => {
  const { supabase, session } = useSupabase();
  const [username, setUsername] = useState('');
  const addUsername = async () => {
    await supabase
      .from('users')
      .update({ username: username })
      .eq('id', session.user.id);
    handleClose();
  };
  console.log(username);
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='m-auto py-0 px-4 rounded-xl flex flex-col items-center modal bg-charcoal-500 border border-gray-800'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <form className='flex flex-col justify-center items-center h-full'>
          <h2 className='font-bold text-3xl pb-1'>Hello there!</h2>
          <p className='text-gray-300 text-sm py-2'>
            Before you can continue, please input a username:
          </p>
          <input
            className='bg-transparent mt-2'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={addUsername}
            disabled={!username}
            className='py-2 px-4 rounded-sm hover:bg-charcoal-300 font-semibold text-sm my-2'
          >
            Continue
          </button>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
