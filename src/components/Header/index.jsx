import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import "../../index.css";

function Header() {
  const location = useLocation();
  const [linkPressionado, setLinkPressionado] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setLinkPressionado(link);
  };

  const handleLogoClick = () => {
    setLinkPressionado("/");
  };

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] flex items-center bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <Link 
          to="/" 
          className="max-w-[200px]" 
          onClick={handleLogoClick}>
          <p className={`text-[22px] font-bold text-black ${linkPressionado === "/" ? "active" : ""}`}>Bevi</p>
        </Link>
        <nav className="hidden xl:flex lg:flex gap-x-16 font-semibold cursor-pointer bg-[#F4F6F8] rounded-full p-2 w-[460px] h-[40px] items-center justify-center">
          <Link
            to="/"
            id="home-link"
            className={`text-gray-700 hover:text-black hover:bg-white hover:shadow-md py-1 px-4 rounded-full transition-all duration-300 ${linkPressionado === "/" ? "text-black bg-white shadow-md" : ""
              }`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/products"
            id="products-link"
            className={`text-gray-700 hover:text-black hover:bg-white hover:shadow-md py-1 px-4 rounded-full transition-all duration-300 ${linkPressionado === "/products" ? "text-black bg-white shadow-md" : ""
              }`}
            onClick={() => handleLinkClick("/products")}
          >
            Lista de Produtos
          </Link>
          <Link
            to="/about"
            id="about-link"
            className={`text-gray-700 hover:text-black  hover:bg-white hover:shadow-md py-1 px-4 rounded-full transition-all duration-300 ${linkPressionado === "/about" ? "text-black bg-white shadow-md" : ""
              }`}
            onClick={() => handleLinkClick("/about")}
          >
            Sobre
          </Link>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
}

export default Header;
