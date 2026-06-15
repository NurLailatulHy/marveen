import Image from "next/image";
import { getServices } from "@/services/service.service";

export default async function Service() {
  const services = await getServices();

  return (
    <section id="services" className="relative h-[500vh] bg-base">
      <div className="sticky top-0 h-screen">
        <div className="flex flex-col justify-center justify-between h-screen">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex justify-center h-full"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.subheading}
                fill
                sizes="100vw"
                className="absolute object-cover z-2 opacity-0"
              />

              {/* Content */}
              <div className="flex justify-center w-full section-padding z-4">
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-[20px] items-center container-custom border-b border-n300 text-center sm:text-left">
                  <h2 className="lg:w-[400px] sm:w-[350px] w-[250px] text-h2">
                    {service.subheading}
                  </h2>

                  <div className="lg:w-[457px] sm:w-[300px]">
                    <p className="text-n400">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
