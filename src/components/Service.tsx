import Image from "next/image";

export default function Service() {
  return (
    <section className="relative h-[500vh] bg-base">
      <div className="sticky top-0 h-screen">
        <div className="flex flex-col justify-center h-screen">
          <div className="relative flex justify-center h-[200px] ">
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
            <div className="flex justify-center w-full section-padding z-4">
              <div className="flex justify-between items-center w-[1200px] mx-auto h-[200px] border-b-1 border-n300">
                <h2 className="text-h2">
                  Brand Positioning <br />& Messaging
                </h2>
                <div className="w-[457px]">
                  <p>
                    Clarify who you are through deep persona research for your{" "}
                    <br /> value pillars to create differentiation strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center h-[200px] ">
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
            <div className="flex justify-center w-full section-padding z-4">
              <div className="flex justify-between items-center w-[1200px] mx-auto h-[200px] border-b-1 border-n300">
                <h2 className="text-h2">
                  Visual Identity
                  <br />
                  Direction
                </h2>
                <div className="w-[457px]">
                  <p>
                    Build a visual language that supports your brand’s essence
                    <br /> using mood & story bords to reach the suitable art
                    direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center h-[200px] ">
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
            <div className="flex justify-center w-full section-padding z-4">
              <div className="flex justify-between items-center w-[1200px] mx-auto h-[200px] border-b-1 border-n300">
                <h2 className="text-h2">
                  Brand Strategy
                  <br /> Intensive
                </h2>
                <div className="w-[457px]">
                  <p>
                    A 2-week rapid brand-building experience for founders
                    <br /> needing clarity, structure, and momentum fast.
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
