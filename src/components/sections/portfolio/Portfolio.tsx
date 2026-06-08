import Image from "next/image";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
  {
    image: "/images/portfolio-1.webp",
    category: "jewelry maker",
    service: "VISUAL IDENTITY DIRECTION",
    title: "EMBER ATELIER",
    index: "1",
  },
  {
    image: "/images/portfolio-2.webp",
    category: "skincare brand",
    service: "brand positioning & messaging",
    title: "SOLVONA SKIN LAB",
    index: "2",
  },
  {
    image: "/images/portfolio-3.webp",
    category: "life coach",
    service: "brand positioning & messaging",
    title: "MARELL COACHING",
    index: "3",
  },
  {
    image: "/images/portfolio-4.webp",
    category: "agritech startup",
    service: "BRAND STRATEGY INTENSIVE",
    title: "ROOTSPRO",
    index: "4",
  },
  {
    image: "/images/image-3.webp",
    category: "home decor",
    service: "VISUAL IDENTITY DIRECTION",
    title: "VIDALEE HOME",
    index: "5",
  },
];

export default function Portfolio() {
  return (
    <section className="relative h-[500vh] w-full bg-base typography-base">
      <div className="sticky top-0 h-dvh">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={item.title}
            image={item.image}
            category={item.category}
            service={item.service}
            title={item.title}
            index={index + 1}
            total={portfolioItems.length}
            zIndex={(portfolioItems.length - index) * 2}
          />
        ))}

        {/* Center Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex justify-center items-center rounded-full bg-base/4 backdrop-blur-xs border border-base/40 w-[80px] h-[80px]">
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
