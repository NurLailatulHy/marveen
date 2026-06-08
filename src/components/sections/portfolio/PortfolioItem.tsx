import Image from "next/image";

interface PortfolioItemProps {
  image: string;
  category: string;
  service: string;
  title: string;
  index: number;
  total: number;
  zIndex: number;
}

export default function PortfolioItem({
  image,
  category,
  service,
  title,
  index,
  total,
  zIndex,
}: PortfolioItemProps) {
  return (
    <div className="absolute inset-0 w-full">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-[center_20%]"
        style={{ zIndex }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-n500/25"
        style={{ zIndex: zIndex + 1 }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col justify-between container-custom h-dvh md:pt-[80px] md:pb-[80px] pt-[40px] pb-[40px] section-padding"
        style={{ zIndex: zIndex + 1 }}
      >
        <div className="flex items-center flex-col sm:justify-between sm:flex-row">
          <p className="text-h6">©2025</p>
          <h6 className="text-h6">KEEP SCROLLING</h6>
        </div>

        <div className="flex flex-col items-center sm:justify-between sm:flex-row">
          <div className="flex items-center flex-col sm:justify-between sm:items-start">
            <div className="flex items-center flex-col sm:flex-row sm:justify-between sm:gap-5">
              <h6 className="text-h6">{category}</h6>
              <div>|</div>
              <h6 className="text-h6">{service}</h6>
            </div>

            <h2 className="text-h2 sm:text-left">{title}</h2>
          </div>

          <div className="flex sm:justify-between">
            <h6 className="text-h6">{String(index).padStart(2, "0")}</h6>

            <h6 className="text-h6 text-n200">
              / {String(total).padStart(2, "0")}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
