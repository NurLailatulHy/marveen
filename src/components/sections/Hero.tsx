import Image from "next/image";

export default function Hero() {
  return (
    <section className="sticky top-0 h-dvh w-full section-padding ">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/images/image-1.webp"
          alt="background"
          fill
          priority
          sizes="100vh"
          quality={75}
          className="object-cover z-1"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom h-dvh lg:h-[90%] md:h-[90%] flex flex-col justify-between typography-base pt-[30px] pb-[30px]">
        <div className="flex flex-col gap-[40%] md:gap-[16px] h-[100%]">
          <div className="flex flex-col md:flex-row text-center justify-between w-full">
            <h1 className="text-h1-xl">ALTHEA</h1>
            <h1 className="text-h1-xl">MARVEEN</h1>
          </div>
          {/* Top Text */}
          <div className="flex flex-col md:flex-row md:items-center text-center justify-between gap-[10px]">
            <div>
              <h6 className="text-h6 leading-none md:text-left">
                Crafting Brands That
                <br />
                Feel Human
              </h6>
            </div>
            <div>
              <h6 className="text-h6 leading-none md:text-right">
                BRAND STRATEGIST
                <br />
                freelancer
              </h6>
            </div>
          </div>
        </div>

        <div className="flex hidden md:flex justify-between">
          <div>
            <p className="text-b2 max-w-sm">
              Shaped brand identities that elevate perception and deepen
              emotional impact.
            </p>
          </div>
          {/* Social media */}
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
