
import Logo3 from "../assets/images/logos/logo-3.svg";


function Footer() {
  return (
    <div className="w-full h-auto min-h-[100px] bg-blue-100 flex items-center justify-center py-5 px-5 ">
      <footer className="w-full md:px-6 px-2 py-10 font-bold text-gray-90 flex items-center justify-between">
        <div className="left w-auto min-w-[30%]">
          <img src={Logo3} className="w-[100px]" />
        </div>
        <div className="w-full flex items-center justify-start gap-[10em]">
          <div className="w-auto flex flex-col items-start justify-start gap-2">
            <label htmlFor="" className="text-white-100 text-[13px] font-ppB">
              Menu
            </label>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Home
            </a>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Converter
            </a>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              How it Works
            </a>
          </div>
          <div className="w-auto flex flex-col items-start justify-start gap-2">
            <label htmlFor="" className="text-white-100 text-[13px] font-ppB">
              About us
            </label>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              About
            </a>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Contact Us
            </a>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Privacy Policy
            </a>
          </div>
          <div className="w-auto flex flex-col items-start justify-start gap-2">
            <label htmlFor="" className="text-white-100 text-[13px] font-ppB">
              Screen Record
            </label>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Browser Window
            </a>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Desktop
            </a>
            <a href="#" className="text-[10px] text-white-100 font-ppReg ">
              Application
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
