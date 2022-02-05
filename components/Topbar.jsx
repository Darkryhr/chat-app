import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Topbar = () => {
  return (
    <div className='px-4 h-16 shadow-md flex items-center border-gray-800 border-b flex-shrink-0 '>
      <img className='w-8 h-8 rounded-full mr-4' src='/avatar.jpg' alt='name' />
      <div className='flex justify-between w-full items-center'>
        <p className='flex flex-col'>
          <span className='text-green-500 text-md font-medium'>Gabriel</span>
          <span className='text-xs font-medium text-gray-500'>Online</span>
        </p>
        <BiSearch size={20} color='#72767D' />
      </div>
    </div>
  );
};

export default Topbar;
