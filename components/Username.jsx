import React, { useState } from 'react';
import useSupabase from '../lib/useSupabase';

const Username = () => {
  const { supabase, session } = useSupabase();
  const [username, setUsername] = useState('');
  const addUsername = async () => {
    await supabase
      .from('users')
      .update({ username: username })
      .eq('id', session.user.id);
    handleClose();
  };
  return (
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
  );
};

export default Username;
