import React, { useState } from 'react';
import useSupabase from '../lib/useSupabase';

const Typebar = () => {
  const [message, setMessage] = useState('');
  const { session, supabase } = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('message')
      .insert([{ content: message, user_id: session.user.id }]);

    setMessage('');
  };

  return (
    <div className='h-20 shadow-md flex items-center justify-center border-gray-800 bg-charcoal-400 border-t flex-shrink-0 px-4 mt-1'>
      <form className='w-full' onSubmit={handleSubmit}>
        <div className='h-12 bg-charcoal-300 w-full rounded-lg flex'>
          <input
            className='bg-transparent pl-4 !outline-none border-transparent focus:border-transparent focus:ring-0 w-full'
            placeholder='Message...'
            type='text'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Typebar;
