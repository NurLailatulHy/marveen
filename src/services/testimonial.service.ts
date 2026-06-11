import { supabase } from "@/lib/supabase";
import { Testimonial } from "@/types/testimonial";

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from("testimonial")
    .select("*")
    .order("sort_order");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}