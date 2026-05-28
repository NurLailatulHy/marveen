import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="relative h-[500vh] bg-base section-padding ">
      {/* Content */}
      <div className="sticky top-0 h-[100vh] flex justify-center">
        <div className="w-[1200px]">
          <div className="absolute w-full h-full flex justify-center items-center z-0">
            <h2 className="text-h2">What Clients Say</h2>
          </div>
          <div className="relative  bg-base z-10">
            <div className="h-[100vh] flex justify-center items-center">
              <div className="flex flex-col w-full">
                <h2 className="text-h2">
                  “Althea didn’t just help me brand my business she helped me
                  understand who I was as a maker.”
                </h2>
                <h6 className="text-h6">sarah lin</h6>
              </div>
              <div className="relative w-[488px] h-[550px]">
                <Image
                  src="/images/image-10.webp"
                  alt="image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
