import React from 'react';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

const Modal = ({ handleClose, children }) => {
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
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
