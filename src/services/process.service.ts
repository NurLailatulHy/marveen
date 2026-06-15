import { supabase } from "@/lib/supabase";
import { Process } from "@/types/process";

export async function getProcess(): Promise<Process[]> {
  const { data, error } = await supabase
    .from("process")
    .select("*")
    .order("id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
