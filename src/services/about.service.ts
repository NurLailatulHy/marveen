import { supabase } from "@/lib/supabase";
import { About, AboutSection } from "@/types/about";

interface AboutResponse {
  aboutItems: About[];
  aboutSection: AboutSection | null;
}
export async function getAboutData(): Promise<AboutResponse> {
  const [aboutRes, sectionRes] = await Promise.all([
    supabase
      .from("about")
      .select("*")
      .order("sort_order"),

    supabase
      .from("about_section")
      .select("*")
      .single(),
  ]);

  if (aboutRes.error) {
    console.error(aboutRes.error);
  }

  if (sectionRes.error) {
    console.error(sectionRes.error);
  }

  return {
    aboutItems: aboutRes.data ?? [],
    aboutSection: sectionRes.data,
  };
}