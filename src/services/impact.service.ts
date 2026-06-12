import { supabase } from "@/lib/supabase";
import { Impact } from "@/types/impact";

export async function getImpact(): Promise<Impact | null> {
  const { data, error } = await supabase
    .from("impact")
    .select(
      `
      *,
      impact_statistic (
        id,
        impact_id,
        statistic,
        label,
        image,
        sort_order
      )
    `,
    )
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
