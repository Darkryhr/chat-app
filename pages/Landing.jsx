import React from 'react';

const Landing = ({ supabase }) => {
  const handleLogin = () => {
    supabase.auth.signIn({
      provider: 'github',
    });
  };

  return (
    <div className='absolute w-full h-full bg-charcoal-600 z-10 flex items-center justify-center'>
      <div className='bg-charcoal-500 w-full h-full flex items-center justify-center'>
        <button
          onClick={handleLogin}
          className='bg-charcoal-400 text-white font-medium text-sm py-2 px-4 rounded-md hover:bg-charcoal-600 border border-gray-800'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
