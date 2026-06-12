import Image from "next/image";
import { getAboutData } from "@/services/about.service";

export default async function About() {
  const { aboutItems, aboutSection } = await getAboutData();

  return (
    <section className="relative h-[500vh] w-full bg-base section-padding">
      <div className="sticky top-0 z-10 container-custom h-dvh flex justify-center items-center">

        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">

          {/* Images */}
          <div className="flex flex-col items-center gap-6">

            <div className="relative w-[190px] h-[166px]">
              {aboutItems.map((item, index) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={item.description}
                  fill
                  className={`absolute object-cover z-${index + 1}`}
                />
              ))}
            </div>

            <h6 className="text-h6 text-n400">
              {aboutSection?.title}
            </h6>

          </div>

          {/* Description */}
          <div className="flex flex-col gap-[12px]">
            {aboutItems.map((item) => (
              <h2 key={item.id} className="text-h2">
                {item.description}
              </h2>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}