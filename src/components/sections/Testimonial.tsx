import Image from "next/image";

export default function Testimonial() {
  const items = ["01", "02", "03"];
  const active = 1;
  return (
    <section className="relative h-[500vh] bg-base section-padding">
      {/* Content */}
      <div className="sticky top-0 h-dvh flex justify-center">
        <div className="container-custom">
          <div className="absolute h-dvh flex justify-center items-center z-0">
            <h2 className="text-h2">What Clients Say</h2>
          </div>
          <div className="relative w-full bg-base z-10">
            <div className="h-[100vh] flex justify-center items-center justify-between gap-8">
              <div className="flex flex-col justify-between items-start w-[610px] h-[550px]">
                <div className="flex items-center gap-5">
                  {items.map((item, index) => (
                    <div key={item} className="flex items-center gap-5">
                      <span
                        className={`text-h6 ${
                          index <= active ? "text-n500" : "text-n300"
                        }`}
                      >
                        {item}
                      </span>

                      {index < items.length - 1 && (
                        <div
                          className={`h-[2px] ${
                            index < active
                              ? "w-[60px] bg-n500"
                              : "w-[24px] bg-n300"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <h2 className="text-h2">
                  “Althea didn’t just help me brand my business she helped me
                  understand who I was as a maker.”
                </h2>
                <div className="flex justify-between w-full">
                  <div>
                    <h6 className="text-h6">sarah lin</h6>
                    <p className="text-b2 text-n400">
                      Founder of Ember Atelier
                    </p>
                  </div>
                  <div className="flex items-end">
                    <h6 className="text-h6 text-n400">KEEP SCROLLING</h6>
                  </div>
                </div>
              </div>
              <div className="relative flex items-end w-[488px] h-[550px]">
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
