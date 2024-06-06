import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const MobileMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="text-black w-10 h-10 flex justify-center items-center hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg font-primary xl:hidden lg:hidden">
            <div
                onClick={() => setOpenMenu(true)}
                className="text-3xl cursor-pointer"
            >
                <CgMenuRight />
            </div>
            <div
                className={`bg-white shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen z-20 transition-transform transform shadow-2xl ${openMenu ? "translate-x-0 duration-500" : "translate-x-full duration-500"
                    }`}
            >
                <div
                    onClick={() => setOpenMenu(false)}
                    className="text-4x1 w-10 h-10 flex justify-center items-center hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg absolute z-30 left-4 top-14 text-black cursor-pointer"
                >
                    <IoMdClose size={30} />
                </div>
                <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-black text-3xl font-primary font-light">
                    <li className="hover:bg-[#F5F5F5] w-full flex justify-center h-[50px] items-center transition-all duration-300">
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:bg-[#F5F5F5] w-full flex justify-center h-[50px] items-center transition-all duration-300">
                        <Link to="/products" onClick={() => setOpenMenu(false)}>
                            Lista de Produtos
                        </Link>
                    </li>
                    <li className="hover:bg-[#F5F5F5] w-full flex justify-center h-[50px] items-center transition-all duration-300">
                        <Link to="/about" onClick={() => setOpenMenu(false)}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileMenu;