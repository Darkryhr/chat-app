import React, { useState, useEffect } from 'react';
import Landing from './Landing';
import Chat from '../components/Chat';

const Home = ({ session, supabase }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!session);
  }, [session]);

  return (
    <main className='bg-charcoal-600'>
      {loggedIn ? (
        <Chat supabase={supabase} session={session} />
      ) : (
        <Landing supabase={supabase} />
      )}
    </main>
  );
};

export default Home;
