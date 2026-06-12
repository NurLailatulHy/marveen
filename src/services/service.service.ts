import { supabase } from "@/lib/supabase";
import { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
  .from("services").select("*").order("id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
