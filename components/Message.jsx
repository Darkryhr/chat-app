import React from 'react';
import { parseISO, format } from 'date-fns';

export const Message = ({ currentUser, content, created_at }) => {
  //* if currentUser, align left, else align right

  const date = parseISO(created_at);

  return (
    <div
      className={`flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-2 items-center ${
        currentUser ? 'justify-end text-right' : ''
      } `}
    >
      <div className='rounded-md bg-charcoal-200 p-3 min-w-[80px]'>
        <p className='flex flex-col items-end'>
          <span className='text-gray-50 text-sm'>{content}</span>
          <span className='text-xs text-gray-300 pt-1'>
            {format(date, 'H:mm a')}
          </span>
        </p>
      </div>
    </div>
  );
};
