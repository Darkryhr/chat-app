import React from 'react';

export const Message = ({ currentUser }) => {
  //* if currentUser, align left, else align right
  return (
    <div
      className={`flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-2 items-center ${
        currentUser ? 'justify-end text-right' : ''
      } `}
    >
      <div className='rounded-md bg-charcoal-200 pt-2 pb-3 px-4'>
        <p className='text-gray-200'>
          You should never use something like leading relaxed with a big font
          size, it goes against all typography best practices. Line height
          should decrease as font size gets bigger
        </p>
      </div>
    </div>
  );
};
