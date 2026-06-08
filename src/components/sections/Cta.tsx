import Image from "next/image";
// import Button from "./Button";

export default function Cta() {
  return (
    <section className="relative w-full bg-base section-padding flex content-center">
      {/* Content */}
      {/* <div className="h-dvh"> */}
      <Image
        src="/images/cta.webp"
        alt="image"
        fill
        priority
        className="absolute object-cover object-[center_100%] z-5"
      />
      {/* </div> */}

      <div className="sticky top-0 container-custom h-dvh flex flex-col justify-center content-center items-center z-20 gap-[16px]">
        <div className="w-[590px] bg-base/10 backdrop-blur-xs border-1 border-base/15 rounded-[10px] p-[40px] ">
          <form className="flex flex-col justify-between content-center gap-[16px]">
            <div>
              <label className=" text-h6 text-base mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-base/40 focus:border-base outline-none text-base py-2"
              />
            </div>

            <div>
              <label className=" text-h6 text-base mb-2">Mail</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-base/40 focus:border-base outline-none text-base py-2"
              />
            </div>

            <div>
              <label className=" text-h6 text-base mb-2">Message</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-base/40 focus:border-base outline-none text-base py-2 resize-none"
              />
            </div>

            <div className="flex justify-center">
              {/* <Button className="w-[255px]">
                  <p className="text-btn2 text-base">BOOK A DISCOVERY CALL</p>
                </Button> */}
              <button
                type="submit"
                className="h-[45px] flex items-center justify-center rounded-full bg-n500 px-6 py-4 text-btn2 text-base rounded-full"
              >
                BOOK A DISCOVERY CALL
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center text-center">
          <h1 className="text-h1-m text-base blend-difference">
            Ready to Build a Brand?
          </h1>
        </div>
      </div>
    </section>
  );
}
