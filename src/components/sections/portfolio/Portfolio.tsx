import Image from "next/image";
import PortfolioItem from "./PortfolioItem";
import { getPortfolio } from "@/services/portfolio.service";

export default async function Portfolio() {
  const portfolioItems = await getPortfolio();

  return (
    <section
      id="portfolio"
      className="relative h-[500vh] w-full bg-base typography-base"
    >
      <div className="sticky top-0 h-dvh flex content-center">
        {portfolioItems.map((portfolio, index) => (
          <PortfolioItem
            key={portfolio.id}
            portfolio={portfolio}
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
