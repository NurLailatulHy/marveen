export default function Footer() {
  return (
    <section className="relative w-full bg-base section-padding flex content-center">
      {/* Content */}
      <div className="z-20 container-custom pt-[100px] pb-[40px]">
        <div className="relative w-full md:h-[354px] h-[500px] flex flex-col justify-between items-center gap-[20px]">
          <div className="w-full flex flex-col md:flex-row justify-between items-center typography-dark md:h-[50px] h-auto">
            <span className="text-btn2">HOME</span>
            <span className="text-n300">|</span>
            <span className="text-btn2">ABOUT</span>
            <span className="text-n300">|</span>
            <span className="text-btn2">SERVICES</span>
            <span className="text-n300">|</span>
            <span className="text-btn2">PORTFOLIO</span>
            <span className="text-n300">|</span>
            <span className="text-btn2">PROCESS</span>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-h1-xl">
            <h1>ALTHEA</h1>
            <h1>Marveen</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center border-t-1 border-n300 gap-[40px] pt-[24px]">
            <div className="text-btn3 text-center md:text-start items-center order-last md:order-first">
              © 2025 CREATED BY 8AM. ALL RIGHTS RESERVED
            </div>
            <div className="w-[261px] flex flex-col md:flex-row justify-between items-center order-first md:order-last">
              <span className="text-btn3">404</span>
              <span className="text-n300">|</span>
              <span className="text-btn3">LICENSE</span>
              <span className="text-n300">|</span>
              <span className="text-btn3">STYLE GUIDE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
