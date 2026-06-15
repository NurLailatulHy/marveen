import Image from "next/image";
import { getHero } from "@/services/hero.service";

export default async function Hero() {
  const hero = await getHero();

  if (!hero) {
    return null;
  }

  const [firstName, lastName] = hero.header.split(" ");

  return (
    <section id="home" className="sticky top-0 h-dvh w-full section-padding flex content-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={hero.hero_image_1}
          alt="hero image 1"
          fill
          sizes="100vw"
          priority
          className="object-cover z-3"
        />

        <Image
          src={hero.hero_image_2}
          alt="hero image 2"
          fill
          sizes="100vw"
          priority
          className="object-cover z-2"
        />

        <Image
          src={hero.hero_image_3}
          alt="hero image 3"
          fill
          sizes="100vw"
          priority
          className="object-cover z-1"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom h-dvh lg:h-[90%] md:h-[90%] flex flex-col justify-between typography-base pt-[30px] pb-[30px]">
        <div className="flex flex-col gap-[40%] md:gap-[16px] h-full">
          <div className="flex flex-col md:flex-row text-center justify-between w-full">
            <h1 className="text-h1-xl">{firstName}</h1>
            <h1 className="text-h1-xl">{lastName}</h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-center text-center justify-between gap-[10px]">
            <div>
              <h6 className="text-h6 leading-none md:text-left whitespace-pre-line">
                {hero.meta_data_1}
              </h6>
            </div>

            <div>
              <h6 className="text-h6 leading-none md:text-right whitespace-pre-line">
                {hero.meta_data_2}
              </h6>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-between">
          <div>
            <p className="text-b2 max-w-sm">{hero.description}</p>
          </div>

          <div className="flex justify-between items-end w-[100px] uppercase">
            <p className="text-b2">li</p>
            <p className="text-b2">x</p>
            <p className="text-b2">ig</p>
          </div>
        </div>
      </div>
    </section>
  );
}
