"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#service", label: "SERVICES" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#process", label: "PROCESS" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ==========================
          DESKTOP & TABLET
      ========================== */}
      <nav className="hidden md:flex absolute w-full bottom-6 inset-x-0 justify-center z-50 section-padding">
        <div className="relative w-full max-w-[1200px]">
          <div className="flex justify-between items-center typography-base px-10 h-[50px] rounded-full bg-base/10 backdrop-blur-md border border-base/30">
            <div className="flex gap-20 lg:gap-38">
              <span>ABOUT</span>
              <span>SERVICES</span>
            </div>

            <div className="flex gap-20 lg:gap-38">
              <span>PORTFOLIO</span>
              <span>PROCESS</span>
            </div>
          </div>

          <button
            className="
              absolute left-1/2 top-6
              -translate-x-1/2 -translate-y-1/2
              w-[90px] h-[90px]
              rounded-full
              bg-base/10
              backdrop-blur-md
              border border-base/30
              flex items-center justify-center
            "
          >
            <Image src="/icons/arrow.svg" alt="arrow" width={48} height={48} />
          </button>
        </div>
      </nav>

      {/* ==========================
          MOBILE BUTTON
      ========================== */}
      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="
            w-16 h-16
            rounded-full
            bg-base/10
            backdrop-blur-md
            border border-base/30
            flex items-center justify-center
          "
        >
          <span className="flex flex-col-sm gap-[4px] text-3xl typography-base">
            <div>−</div>
            <div>−</div>
          </span>
        </button>
      </div>

      {/* ==========================
          MOBILE MENU
      ========================== */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[999] flex flex-col items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0  backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Card */}
          <div
            className="
              relative
              w-[85%]
              max-w-[380px]
              rounded-[50px]
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              py-14
            "
          >
            <div className="flex flex-col items-center gap-10 typography-base">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-h6"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex gap-8 mt-8">
                <span>LI</span>
                <span>X</span>
                <span>IG</span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              mt-8
              w-16 h-16
              rounded-full
              bg-base/10
              backdrop-blur-md
              border border-base/30
              flex items-center justify-center
              typography-base
            "
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
