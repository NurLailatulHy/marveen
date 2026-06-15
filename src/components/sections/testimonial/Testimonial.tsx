// import Image from "next/image";
import TestimonialItem from "./TestimonialItem";
import { getTestimonials } from "@/services/testimonial.service";

export default async function Testimonial() {
  const testimonials = await getTestimonials();
  // console.log(testimonials);
  return (
    <section className="relative h-[500vh] w-full bg-base section-padding">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* Background Title */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-h2">What Clients Say</h2>
        </div>

        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            total={testimonials.length}
            zIndex={testimonials.length - index}
          />
        ))}
      </div>
    </section>
  );
}
// export default function Testimonial() {
//   const items = ["01", "02", "03"];
//   const active = 1;
//   return (
//     <section className="relative h-[500vh] w-full bg-base section-padding">

//       <div className="sticky top-0 z-10 container-custom h-dvh w-full flex justify-center">
{
  /* <div className="container-custom h-dvh w-full"> */
}
{
  /* <div className="absolute h-dvh w-full flex justify-center items-center z-0">
          <h2 className="text-h2">What Clients Say</h2>
        </div> */
}
{
  /* <div className="relative w-full bg-base z-10 ">
          <div className="h-dvh flex flex-col justify-center items-center justify-between md:flex-row gap-8 bg-n200 md:bd-base rounded-[24px]">
            <div className="flex flex-col justify-between md:items-start items-center w-full md:w-[610px] md:h-[550px] gap-5">
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
              <h2 className="text-h2 text-center md:text-start">
                “Althea didn’t just help me brand my business she helped me
                understand who I was as a maker.”
              </h2>
              <div className="flex flex-col md:flex-row items-center text-center md:text-start justify-between w-full">
                <div>
                  <h6 className="text-h6">sarah lin</h6>
                  <p className="text-b2 text-n400">Founder of Ember Atelier</p>
                </div>
                <div className="flex items-end">
                  <h6 className="text-h6 text-n400">KEEP SCROLLING</h6>
                </div>
              </div>
            </div>
            <div className="relative w-[200px] h-[300px] flex items-end md:w-[488px] md:h-[550px]">
              <Image
                src="/images/image-10.webp"
                alt="image"
                fill
                
                className="object-cover"
              />
            </div>
          </div>
        </div> */
}
{
  /* </div> */
}
//       </div>
//     </section>
//   );
// }
