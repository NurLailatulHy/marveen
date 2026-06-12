import Image from "next/image";
import { Testimonial } from "@/types/testimonial";
import Pagination from "@/components/ui/Pagination";

interface Props {
  testimonial: Testimonial;
  index: number;
  total: number;
  zIndex: number;
}

export default function TestimonialItem({
  testimonial,
  index,
  total,
  zIndex,
}: Props) {
  return (
    <div className="absolute inset-0 bg-base " style={{ zIndex }}>
      <div className="container-custom h-dvh flex flex-col justify-between items-center md:flex-row md:gap-8">
        {/* Left */}
        <div className="flex flex-col justify-between w-full md:w-[610px] h-dvh">
          <Pagination total={total} activeIndex={index} />

          <h2 className="text-h2">“{testimonial.quote}”</h2>

          <div className="flex justify-between">
            <div>
              <h6 className="text-h6">{testimonial.author}</h6>

              <p className="text-b2 text-n400">{testimonial.role}</p>
            </div>

            <h6 className="text-h6 text-n400">KEEP SCROLLING</h6>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full md:w-[488px] h-[550px]">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
