import '../styles/globals.css';
import useSupabase from '../lib/useSupabase';

function MyApp({ Component, pageProps }) {
  const { session, supabase, currentUser } = useSupabase();

  return (
    <Component
      {...pageProps}
      supabase={supabase}
      session={session}
      currentUser={currentUser}
    />
  );
}

export default MyApp;
