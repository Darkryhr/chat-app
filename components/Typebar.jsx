import React from 'react';

const Typebar = () => {
  return (
    <div className='h-20 shadow-md flex items-center justify-center border-gray-800 bg-charcoal-400 border-t flex-shrink-0 px-4'>
      <div className='h-12 bg-charcoal-300 w-full rounded-lg flex'>
        <input
          className='bg-transparent pl-4 !outline-none border-transparent focus:border-transparent focus:ring-0 w-full'
          placeholder='Message...'
          type='text'
        />
      </div>
    </div>
  );
};

export default Typebar;
