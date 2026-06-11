import { supabase } from "@/lib/supabase";
import { Hero } from "@/types/hero";

export async function getHero(): Promise<Hero | null> {
  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}