import '../styles/globals.css';
import useSupabase from '../lib/useSupabase';

function MyApp({ Component, pageProps }) {
  const { session, supabase } = useSupabase();

  return <Component {...pageProps} supabase={supabase} session={session} />;
}

export default MyApp;
