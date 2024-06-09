import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <section className=" h-screen flex justify-center items-center text-black bg-[#F4F6F8]">
        <div className="max-w-[1000px] container mx-auto ">
          <div className="flex md:justify-between justify-center items-center ">
            <div className="flex flex-col justify-center ">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-center md:text-left">Be Focus and <br /> Productive</h1>
              <p className="text-lg md:text-[15px] mb-8 text-center md:text-left">Teste seus limites e alcance seus objetivos.</p>
              <div className="flex md:justify-start justify-center items-center">
                <Link 
                  to="/about"
                >
                  <button className="w-[210px] h-[55px] bg-black text-white font-bold hover:shadow-lg transition-all">
                    Sobre Nós
                  </button>
                </Link>
              </div>
            </div>

              <div className="hidden md:grid md:grid-cols-2 justify-center items-center gap-5">
                <div className="w-[160px] h-[200px] lg:w-[200px] lg:h-[250px] bg-gray-300 rounded-lg"></div>
                <div className="w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] bg-gray-300 rounded-lg mt-16"></div>
                <div className="w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] bg-gray-300 rounded-lg mb-16"></div>
                <div className="w-[160px] h-[200px] lg:w-[200px] lg:h-[250px] bg-gray-300 rounded-lg"></div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
