import { supabase } from "@/lib/supabase";
import { Portfolio } from "@/types/portfolio";

export async function getPortfolio(): Promise<Portfolio[]> {
  const { data, error } = await supabase
  .from("portfolio").select("*").order("id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
