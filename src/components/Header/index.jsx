import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] flex items-center bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <p className="text-[22px] font-bold text-white lg:text-black">Logo</p>
        </Link>
        <nav className=" hidden xl:flex lg:flex gap-x-16 font-semibold cursor-pointer bg-[#F4F6F8] rounded-md p-2 w-[420px] items-center justify-center">
          <Link to="/" className="text-gray-700 hover:text-black transition">
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-black transition"
          >
            cadastro de produtos
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-black transition"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
