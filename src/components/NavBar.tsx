import Logo2 from "../assets/images/logos/logo-2.png";


function NavBar() {
    return (
        <div className="w-full flex items-center justify-start px-[5em] py-4 shadow-sm">
            <div className="w-full flex items-center justify-between gap-9">
                <img src={Logo2} className="w-[100px] " />
                <div className="flex items-center justify-center gap-3">
                    <a href="#" className="text-blue-100 text-[12px] font-ppSB">
                        Features
                    </a>
                    <a href="#" className="text-blue-100 text-[12px] font-ppSB">
                        How it Works
                    </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <a href="#" className="text-blue-100 text-[12px] font-ppSB">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar