import Image from "next/image";
import Button from "../../ui/Button";
import { getImpact } from "@/services/impact.service";

export default async function Impact() {
  const impact = await getImpact();
  if (!impact) return null;
  return (
    <section className="relative h-[500vh] w-full bg-base section-padding flex content-center">
      {/* Content */}
      <div className="sticky top-0 z-10 container-custom h-dvh flex content-center pt-[30px] pb-[30px]">
        <div className="w-full flex flex-col md:flex-row justify-between justify-items-center  gap-[20px]">
          {/* Left */}
          <div className="flex flex-col justify-between h-[520px] w-full text-center md:text-left">
            <h2 className="text-h2 w-[350px] lg:w-[570px]">{impact.tittle}</h2>
            <div className="flex flex-col items-center md:items-start gap-[30px]">
              <p className="text-b2 w-[330px] lg:w-[438px] text-n400">
                {impact.description}
              </p>

              <Button className="w-[200px] h-[45px]">{impact.button}</Button>
            </div>
          </div>
          {/* Statistic Items */}
          <div className="flex flex-col justify-between">
            {impact.impact_statistic
              .sort((a, b) => a.sort_order - b.sort_order)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-end pb-[40px] mt-[20px] border-b border-n400"
                >
                  <div className="flex gap-4">
                    <h1 className="text-h1-l">{item.statistic}</h1>

                    <div className="relative w-[90px] h-[90px]">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h6 className="text-h6">{item.label}</h6>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
