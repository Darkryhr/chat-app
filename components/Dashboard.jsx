import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-between items-center relative'>
      <div className='bg-charcoal-500 p-6 border-gray-800 border-r overflow-y-scroll space-y-4 flex flex-col justify-between'>
        <div className='bg-white text-charcoal-800 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
          TW
        </div>
      </div>
      <div className='bg-charcoal-500 border-t border-gray-800 h-20 w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
        <button
          className='bg-white text-charcoal-800 w-12 h-12 rounded-full flex items-center justify-center'
          // onClick={}
        >
          TW
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
