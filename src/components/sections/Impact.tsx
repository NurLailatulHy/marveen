import Image from "next/image";
import Button from "../ui/Button";

export default function Impact() {
  return (
    <section className="relative h-[500vh] w-full bg-base section-padding ">
      {/* Content */}
      <div className="sticky top-0 z-10 container-custom h-dvh flex content-center pt-[30px] pb-[30px]">
        <div className="w-full flex justify-between justify-center items-center">
          <div className="flex flex-col justify-between h-[520px] w-full">
            <h2 className="text-h2 w-[350px] lg:w-[570px]">
              Strong brand foundations lead to sustainable growth.
            </h2>
            <div className="flex flex-col gap-[30px]">
              <p className="text-b2 w-[330px] lg:w-[438px] text-n400">
                The value of brand strategy is felt in how a brand moves forward
                and creates measurable change.
              </p>
              {/* <Button className="w-[200px] text-btn2">
                free trial session
              </Button> */}
              <Button className="w-[200px] h-[45px]">free trial session</Button>
            </div>
          </div>
          {/* Statistic Items */}
          <div className="flex flex-col justify-between">
            <div className=" flex flex-col items-end content-center pb-[40px] border-b border-n400">
              <div className="flex gap-4">
                <h1 className="text-h1-l">65+</h1>
                <div className="relative w-[90px] h-[90px] ">
                  <Image
                    src="/images/impact-1.webp"
                    alt="image"
                    fill
                    priority
                    sizes="100vw"
                    className=" object-cover"
                  />
                </div>
              </div>
              <h6 className="text-h6">brands transformed</h6>
            </div>
            <div className=" flex flex-col items-end content-center pb-[40px] mt-[20px] border-b border-n400">
              <div className="flex gap-4">
                <h1 className="text-h1-l">92%</h1>
                <div className="relative w-[90px] h-[90px] ">
                  <Image
                    src="/images/impact-2.webp"
                    alt="image"
                    fill
                    priority
                    sizes="100vw"
                    className=" object-cover"
                  />
                </div>
              </div>
              <h6 className="text-h6">client retention</h6>
            </div>
            <div className=" flex flex-col items-end pb-[40px] mt-[20px] border-b border-n400">
              <div className="flex gap-4">
                <h1 className="text-h1-l">100%</h1>
                <div className="relative w-[90px] h-[90px] ">
                  <Image
                    src="/images/image-9.webp"
                    alt="image"
                    fill
                    priority
                    sizes="100vw"
                    className=" object-cover"
                  />
                </div>
              </div>
              <h6 className="text-h6">brands transformed</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
