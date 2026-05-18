import Image from "next/image";

export default function Service() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="flex flex-col justify-center h-screen w-full">
        <div className="relative h-[200px]">
          <Image
            src="/images/image-5.webp"
            alt="image"
            fill
            priority
            // sizes="100vw"
            className=" object-cover opacity-0"
          />
          <div className="flex justify-between items-center max-w-[1200px] h-[200px]">
            <div>Brand Positioning & Messaging</div>
            <div>
              Clarify who you are through deep persona research for your <br />{" "}
              value pillars to create differentiation strategy.
            </div>
          </div>
        </div>
        <div className="relative w-full h-[200px]">
          <Image
            src="/images/image-6.webp"
            alt="image"
            fill
            priority
            // sizes="100vw"
            className=" object-cover"
          />
        </div>
        <div className="relative w-full h-[200px]">
          <Image
            src="/images/image-7.webp"
            alt="image"
            fill
            priority
            // sizes="100vw"
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}
