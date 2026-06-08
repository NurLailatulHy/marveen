import Image from "next/image";

export default function Service() {
  return (
    <section className="relative h-[500vh] bg-base">
      <div className="sticky top-0 h-screen">
        <div className="flex flex-col justify-center justify-between h-screen">
          <div className="relative flex justify-center  h-[100%]">
            {/* Bg Image full widht */}
            <Image
              src="/images/image-8.webp"
              alt="image"
              fill
              priority
              sizes="100vw"
              className="absolute object-cover z-2 opacity-0"
            />
            {/* Content items */}
            <div className="flex justify-center w-[100%] section-padding z-4">
              <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-[20px] items-center container-custom border-b-1 border-n300 text-center sm:text-left">
                <h2 className="lg:w-[400px] sm:w-[350px] w-[250px] text-h2 ">
                  Brand Positioning & Messaging
                </h2>
                <div className="lg:w-[457px] sm:w-[300px] ">
                  <p className="text-n400">
                    Clarify who you are through deep persona research for your{" "}
                    value pillars to create differentiation strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center  h-[100%]">
            {/* Bg Image full widht */}
            <Image
              src="/images/image-9.webp"
              alt="image"
              fill
              priority
              sizes="100vw"
              className="absolute object-cover z-2 opacity-0"
            />
            {/* Content items */}
            <div className="flex justify-center w-[100%] section-padding z-4">
              <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-[20px] items-center container-custom border-b-1 border-n300 text-center sm:text-left">
                <h2 className="lg:w-[400px] sm:w-[350px] w-[250px] text-h2">
                  Visual Identity Direction
                </h2>
                <div className="lg:w-[457px] sm:w-[300px]">
                  <p className="text-n400">
                    Build a visual language that supports your brand’s essence
                    using mood & story bords to reach the suitable art
                    direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center  h-[100%]">
            {/* Bg Image full widht */}
            <Image
              src="/images/image-10.webp"
              alt="image"
              fill
              priority
              sizes="100vw"
              className="absolute object-cover z-2 opacity-0"
            />
            {/* Content items */}
            <div className="flex justify-center w-[100%] section-padding z-4">
              <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-[20px] items-center container-custom border-b-1 border-n300 text-center sm:text-left">
                <h2 className="lg:w-[400px] sm:w-[350px] w-[250px] text-h2">
                  Brand Strategy Intensive
                </h2>
                <div className="lg:w-[457px] sm:w-[300px]">
                  <p className="text-n400">
                    A 2-week rapid brand-building experience for founders
                    needing clarity, structure, and momentum fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
