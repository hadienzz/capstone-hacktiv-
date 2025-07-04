import { createClient } from "@supabase/supabase-js";

const supabaseClient = () => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );
  return supabase;
};

export default supabaseClient;
