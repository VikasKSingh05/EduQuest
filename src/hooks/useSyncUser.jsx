// src/hooks/useSyncUser.js
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../SupabaseClient";

export default function useSyncUser() {
  const { user } = useUser();

  useEffect(() => {
    const sync = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!data) {
        await supabase.from("profiles").insert([
          {
            id: user.id,
            name: user.firstName || "Anonymous",
            points: 0,
          },
        ]);
      }
    };
    sync();
  }, [user]);
}
