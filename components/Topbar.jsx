import React, { useState, useRef, useEffect } from 'react';
import { BiSearch, BiDotsVerticalRounded } from 'react-icons/bi';
import useSupabase from '../lib/useSupabase';

const Topbar = () => {
  const { currentUser } = useSupabase();
  if (!currentUser) return <h1>Loading...</h1>;

  return (
    <div className='px-4 h-16 shadow-md flex items-center border-gray-800 border-b flex-shrink-0 '>
      <img className='w-8 h-8 rounded-full mr-4' src='/avatar.jpg' alt='name' />
      <div className='flex justify-between w-full items-center'>
        <p className='flex flex-col'>
          <span className='text-green-500 text-md font-medium'>
            {currentUser?.username}
          </span>
          <span className='text-xs font-medium text-gray-500'>Online</span>
        </p>
        <div className='flex space-x-4'>
          <BiSearch size={20} color='#72767D' />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

const Dropdown = () => {
  const { supabase } = useSupabase();
  const [isOpen, setIsOpen] = useState(false);
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    const escClick = document.addEventListener(
      'keydown',
      (e) => (e.key === 'Esc' || e.key === 'Escape') && setIsOpen(false)
    );
    return () =>
      document.removeEventListener('click', handleClickOutside, true) &&
      document.removeEventListener(escClick);
  });

  const logout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div className='relative' ref={ref}>
      <button
        id='dropdownButton'
        data-dropdown-toggle='dropdownId'
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='focus:outline-none'
      >
        <BiDotsVerticalRounded size={20} color='#72767D' />
      </button>
      {isOpen ? (
        <div className='bg-charcoal-400 rounded-md py-2 w-48 border border-gray-800 absolute right-0 top-auto'>
          <a href='#' className='block px-4 py-2 hover:bg-charcoal-200'>
            Settings
          </a>
          <a
            href='#'
            className='block px-4 py-2 hover:bg-charcoal-200'
            onClick={() => logout()}
          >
            Sign Out
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
