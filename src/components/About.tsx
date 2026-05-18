import Image from "next/image";

export default function About() {
  return (
    <section className="relative top-0 h-screen w-full overflow-hidden bg-white">
      {/* Content */}
      <div className="z-10 max-w-[1200px] mx-auto h-[100vh] flex content-center">
        <div className="sticky top-0 flex justify-between items-center w-full h-[100vh]">
          <div className="flex flex-col items-center gap-8">
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
            <div className="">
              <h6 className="text-h6 text-n400">since middle of 2026</h6>
            </div>
          </div>
          <div className="">
            <h2 className="text-h2 text-black">
              A blend of strategic clarity and narrative
            </h2>
            <h2 className="text-h2 text-black">
              psychology forms the foundation of
            </h2>
            <h2 className="text-h2 text-black">
              branding rooted in identity and
            </h2>
            <h2 className="text-h2 text-black">emotional resonance.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
