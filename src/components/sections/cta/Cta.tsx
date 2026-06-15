import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import { getCta } from "@/services/cta.service";

export default async function Cta() {
  const cta = await getCta();

  if (!cta) return null;
  return (
    <section
      id="contact"
      className="relative w-full bg-base section-padding flex content-center"
    >
      {/* Content */}
      {/* <div className="h-dvh"> */}
      <Image
        src={cta.image}
        alt="image"
        fill
        sizes="100vw"
        className="absolute object-cover object-[center_100%] z-5"
      />
      {/* </div> */}

      <div className="sticky top-0 container-custom h-dvh flex flex-col justify-center content-center items-center z-20 gap-[16px]">
        <div className="w-full lg:w-[590px] bg-base/10 backdrop-blur-xs border-1 border-base/15 rounded-[10px] md:px-[40px] px-[30px] py-[40px] ">
          <ContactForm />
        </div>
        <div className="flex justify-center text-center">
          <h1 className="text-h1-m text-base blend-difference">{cta.title}</h1>
        </div>
      </div>
    </section>
  );
}
