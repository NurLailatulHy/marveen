export default function Footer() {
  return (
    <section className="relative w-full bg-base section-padding flex content-center pt-[100px] pb-[40px]">
      {/* Content */}
      <div className="z-20 w-[1200px] ">
        <div className="w-full h-[354px] flex flex-col justify-between items-center">
          <div className="w-full flex justify-between items-center typography-dark  h-[50px]">
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
          <div className="flex justify-between text-h1-xl">
            <h1>ALTHEA</h1>
            <h1>Marveen</h1>
          </div>
          <div className="w-full flex justify-between border-t-1 border-n300 pt-[24px]">
            <div className="text-btn3">
              © 2025 CREATED BY 8AM. ALL RIGHTS RESERVED
            </div>
            <div className="w-[261px] flex justify-between ">
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
