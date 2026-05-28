import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="relative h-[500vh] w-full bg-base typography-base ">
      {/* Content */}
      <div className="sticky top-0  h-[100vh]">
        <div className="absolute w-full flex content-center">
          {/* Image Bg */}
          <Image
            src="/images/portfolio-1.webp"
            alt="image"
            fill
            priority
            className="absolute object-cover object-[center_20%] z-9 bg-blend-overlay"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-n500/25 z-10"></div>
          {/* Content items */}
          <div className="relative flex flex-col justify-between w-[1200px] h-[100vh] mx-auto z-10 pt-[80px] pb-[80px] section-padding">
            <div className="flex items-start justify-between">
              <p className="text-h6">©2025</p>
              <h6 className="text-h6">KEEP SCROLLING</h6>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between gap-5">
                  <h6 className="text-h6">jewelry maker</h6>
                  <div>|</div>
                  <h6 className="text-h6">VISUAL IDENTITY DIRECTION</h6>
                </div>
                <h2 className="text-h2">EMBER ATELIER</h2>
              </div>
              <div className="flex">
                <h6 className="text-h6">01</h6>
                <h6 className="text-h6 text-n200">/ 05</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full flex content-center">
          {/* Image Bg */}
          <Image
            src="/images/portfolio-2.webp"
            alt="image"
            fill
            priority
            className="absolute object-cover object-[center_20%] z-7"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-n500/25 z-8"></div>
          {/* Content items */}
          <div className="relative flex flex-col justify-between w-[1200px] h-[100vh] mx-auto z-8 pt-[80px] pb-[80px] section-padding">
            <div className="flex items-start justify-between">
              <p className="text-h6">©2025</p>
              <h6 className="text-h6">KEEP SCROLLING</h6>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between gap-5">
                  <h6 className="text-h6">skincare brand</h6>
                  <div>|</div>
                  <h6 className="text-h6">brand positioning & messaging</h6>
                </div>
                <h2 className="text-h2">SOLVONA SKIN LAB</h2>
              </div>
              <div className="flex">
                <h6 className="text-h6">02</h6>
                <h6 className="text-h6 text-n200">/ 05</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full flex content-center">
          {/* Image Bg */}
          <Image
            src="/images/portfolio-3.webp"
            alt="image"
            fill
            priority
            className="absolute object-cover object-[center_20%] z-5"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-n500/25 z-6"></div>
          {/* Content items */}
          <div className="relative flex flex-col justify-between w-[1200px] h-[100vh] mx-auto z-6 pt-[80px] pb-[80px] section-padding">
            <div className="flex items-start justify-between">
              <p className="text-h6">©2025</p>
              <h6 className="text-h6">KEEP SCROLLING</h6>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between gap-5">
                  <h6 className="text-h6">LIFE COACH</h6>
                  <div>|</div>
                  <h6 className="text-h6">brand positioning & messaging</h6>
                </div>
                <h2 className="text-h2">MARELL COACHING</h2>
              </div>
              <div className="flex">
                <h6 className="text-h6">03</h6>
                <h6 className="text-h6 text-n200">/ 05</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full flex content-center">
          {/* Image Bg */}
          <Image
            src="/images/portfolio-4.webp"
            alt="image"
            fill
            priority
            className="absolute object-cover object-[center_20%] z-3"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-n500/25 z-4"></div>
          {/* Content items */}
          <div className="relative flex flex-col justify-between w-[1200px] h-[100vh] mx-auto z-4 pt-[80px] pb-[80px] section-padding">
            <div className="flex items-start justify-between">
              <p className="text-h6">©2025</p>
              <h6 className="text-h6">KEEP SCROLLING</h6>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between gap-5">
                  <h6 className="text-h6">agritech startup</h6>
                  <div>|</div>
                  <h6 className="text-h6">BRAND STRATEGY INTENSIVE</h6>
                </div>
                <h2 className="text-h2">ROOTSPRO</h2>
              </div>
              <div className="flex">
                <h6 className="text-h6">04</h6>
                <h6 className="text-h6 text-n200">/ 05</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full flex content-center">
          {/* Image Bg */}
          <Image
            src="/images/image-3.webp"
            alt="image"
            fill
            priority
            className="absolute object-cover object-center z-1"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-n500/25 z-2"></div>
          {/* Content items */}
          <div className="relative flex flex-col justify-between w-[1200px] h-[100vh] mx-auto z-2 pt-[80px] pb-[80px] section-padding">
            <div className="flex items-start justify-between">
              <p className="text-h6">©2025</p>
              <h6 className="text-h6">KEEP SCROLLING</h6>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between gap-5">
                  <h6 className="text-h6">home decor</h6>
                  <div>|</div>
                  <h6 className="text-h6">VISUAL IDENTITY DIRECTION</h6>
                </div>
                <h2 className="text-h2">VIDALEE HOME</h2>
              </div>
              <div className="flex">
                <h6 className="text-h6">05</h6>
                <h6 className="text-h6 text-n200">/ 05</h6>
              </div>
            </div>
          </div>
        </div>
        {/* {Button circle} */}
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ">
          <div className="flex justify-center items-center rounded-full bg-base/4 backdrop-blur-xs border-1 border-base/40 w-[80px] h-[80px]">
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow up"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
