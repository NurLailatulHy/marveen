// import Image from "next/image";
import Image from "next/image";
import { getProcess } from "@/services/process.service";

export default async function Process() {
  const processes = await getProcess();

  return (
    <section
      id="process"
      className="relative h-[500vh] w-full bg-base section-padding"
    >
      <div className="sticky top-0 flex justify-center h-dvh">
        <div className="flex flex-col justify-center container-custom">
          {processes.map((process, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={process.id}
                className={`relative flex gap-5 items-center h-[166px] border-b border-n300 px-[20px]
                  ${
                    index === 2
                      ? "justify-center"
                      : isEven
                        ? "justify-end"
                        : "justify-start"
                  }
                `}
              >
                {/* Background */}
                <Image
                  src={process.image}
                  alt={process.header}
                  fill
                  className="absolute object-cover opacity-0"
                />

                {isEven ? (
                  <>
                    <h2 className="text-h2 z-3">{process.header}</h2>

                    <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
                      <Image
                        src={process.image}
                        alt={process.header}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
                      <Image
                        src={process.image}
                        alt={process.header}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h2 className="text-h2 z-3">{process.header}</h2>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// export default function Process() {
//   return (
//     <section className="relative h-[500vh] w-full bg-base section-padding">
//       <div className="sticky top-0 flex justify-center h-dvh">
//         <div className="flex flex-col justify-center container-custom">
//           {/* Item 1 */}
//           <div className="relative flex justify-start gap-5 items-center h-[166px] border-b-1 border-n300 px-[20px]">
//             <Image
//               src="/images/process-1.webp"
//               alt="image"
//               fill
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="absolute object-cover z-2 opacity-0"
//             />
//             <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
//               <Image
//                 src="/images/process-1.webp"
//                 alt="image"
//                 fill
//                 sizes="(max-width: 640px) 65px, (max-width: 768px) 70px, 86px"
//                 className="object-cover z-2"
//               />
//             </div>
//             <h2 className="text-h2 z-3">Discovery & Insights</h2>
//           </div>
//           {/* item 2 */}
//           <div className="relative flex justify-end gap-5 items-center h-[166px] border-b-1 border-n300 px-[20px]">
//             <Image
//               src="/images/process-2.webp"
//               alt="image"
//               fill
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="absolute object-cover z-2 opacity-0"
//             />
//             <h2 className="text-h2 z-3">Brand Narrative Shaping</h2>
//             <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
//               <Image
//                 src="/images/process-2.webp"
//                 alt="image"
//                 fill
//                 sizes="(max-width: 640px) 65px, (max-width: 768px) 70px, 86px"
//                 className="object-cover z-2"
//               />
//             </div>
//           </div>
//           {/* item 3 */}
//           <div className="relative flex justify-center gap-5 items-center h-[166px] border-b-1 border-n300 ">
//             <Image
//               src="/images/process-3.webp"
//               alt="image"
//               fill
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="absolute object-cover z-2 opacity-0"
//             />
//             <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
//               <Image
//                 src="/images/process-3.webp"
//                 alt="image"
//                 fill
//                 sizes="(max-width: 640px) 65px, (max-width: 768px) 70px, 86px"
//                 className="object-cover z-2"
//               />
//             </div>
//             <h2 className="text-h2 z-3">Strategic Structuring</h2>
//           </div>
//           {/* item 4 */}
//           <div className="relative flex gap-5 items-center h-[166px] border-b-1 border-n300 px-[20px]">
//             <Image
//               src="/images/process-4.webp"
//               alt="image"
//               fill
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="absolute object-cover object-[center_40%] z-2 opacity-0"
//             />
//             <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
//               <Image
//                 src="/images/process-4.webp"
//                 alt="image"
//                 fill
//                 sizes="(max-width: 640px) 65px, (max-width: 768px) 70px, 86px"
//                 className="object-cover z-2"
//               />
//             </div>
//             <h2 className="text-h2 z-3">Visual Direction</h2>
//           </div>
//           {/* item 5 */}
//           <div className="relative flex justify-end gap-5 items-center h-[166px] border-b-1 border-n300 px-[20px]">
//             <Image
//               src="/images/process-5.webp"
//               alt="image"
//               fill
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="absolute object-cover z-2 opacity-0"
//             />
//             <h2 className="text-h2 z-3">Final Alignment</h2>
//             <div className="relative md:w-[86px] md:h-[86px] sm:w-[70px] sm:h-[70px] w-[65px] h-[55px]">
//               <Image
//                 src="/images/process-5.webp"
//                 alt="image"
//                 fill
//                 sizes="(max-width: 640px) 65px, (max-width: 768px) 70px, 86px"
//                 className="object-cover z-2"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
