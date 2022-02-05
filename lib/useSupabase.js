import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

const useSupabase = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [session, setSession] = useState(supabase.auth.session());

  supabase.auth.onAuthStateChange(async (_event, session) => {
    setSession(session);
  });

  useEffect(() => {
    const getCurrentUser = async () => {
      if (session?.user.id) {
        const { data: currentUser } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id);
        if (!currentUser.length) return;
        const user = currentUser[0];
        await supabase
          .from(`users:id=eq.${user.id}`)
          .on('UPDATE', (payload) => setCurrentUser(payload.new))
          .subscribe();
        setCurrentUser(user);
      }
    };
    getCurrentUser();
  }, [session]);

  return { session, supabase, currentUser };
};

export default useSupabase;
