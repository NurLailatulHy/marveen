import Image from "next/image";

export default function Hero() {
  return (
    <section className="sticky top-0 min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image-1.webp"
          alt="background"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative pt-2 z-10 max-w-[1200px] mx-auto h-full flex flex-col typography-base">
        <div className="w-full">
          <h1 className="text-h1-xl">ALTHEA MARVEEN</h1>
        </div>
        {/* Top Text */}
        <div className="flex justify-between">
          <div>
            <h2 className="text-h6 leading-none">
              Crafting Brands That
              <br />
              Feel Human
            </h2>
          </div>

          <div className="text-h6 text-right">
            BRAND STRATEGIST
            <br />
            freelancer
          </div>
        </div>

        <div className="pt-53 flex justify-between">
          <div>
            <p className="text-b2 mt-6 max-w-sm">
              Shaped brand identities that elevate perception and deepen
              emotional impact.
            </p>
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
