import { supabase } from "@/lib/supabase";
import { Cta } from "@/types/cta";

export async function getCta(): Promise<Cta | null> {
  const { data, error } = await supabase
    .from("cta")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}