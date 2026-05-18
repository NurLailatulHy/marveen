// components/Navbar.js
// "use client"
// import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute bottom-6 inset-x-0 flex justify-center z-50">
      <div className="relative w-full max-w-[1200px]">
        {/* Navbar */}
        <div className="flex justify-between items-center typography-base px-10 h-[50px] rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <div className="flex gap-38">
            <span>ABOUT</span>
            <span>SERVICES</span>
          </div>

          <div className="flex gap-38">
            <span>PORTFOLIO</span>
            <span>PROCESS</span>
          </div>
        </div>
        {/* Circle */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-6
                    w-[90px] h-[90px] rounded-full 
                    bg-white/10 backdrop-blur-md border border-white/20 
                    flex items-center justify-center"
        >
          <Image src="/icons/arrow.svg" alt="arrow" width={48} height={48} />
        </div>
      </div>
    </div>
  );
}
