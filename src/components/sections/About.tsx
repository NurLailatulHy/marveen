import Image from "next/image";

export default function About() {
  return (
    <section className="relative h-[500vh] w-full bg-base section-padding">
      {/* Content */}
      <div className="sticky top-0 z-10 container-custom h-dvh flex justify-center items-center">
        <div className=" flex flex-col lg:flex-row justify-between items-center  w-full">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-[190px] h-[166px] ">
              <Image
                src="/images/image-4.webp"
                alt="image"
                fill
                priority
                sizes="100vw"
                className=" object-cover"
              />
            </div>
            <div>
              <h6 className="text-h6 text-n400">since middle of 2026</h6>
            </div>
          </div>
          {/* Paragraph Items */}
          <div className="flex flex-col gap-[12px] text-left top-0">
            <h2 className="text-h2 text-n500">
              A blend of strategic clarity and narrative
            </h2>
            <h2 className="text-h2 text-n500">
              psychology forms the foundation of
            </h2>
            <h2 className="text-h2 text-n500">
              branding rooted in identity and
            </h2>
            <h2 className="text-h2 text-n500">emotional resonance.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
