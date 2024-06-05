import React from "react";

function FormProducts() {

  return (
    <main className="flex justify-center items-center">
      <form className="flex flex-col gap-5 w-[400px]">

        <div className="hidden flex flex-col gap-1">
          <label htmlFor="">Id</label>
          <input type="number" />
        </div>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="">Nome</label>
          <input type="text" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Descrição</label>
          <input type="text" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Preço</label>
          <input type="number" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Quantidade</label>
          <input type="number" />
        </div>

        <button 
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
          >
            Cadastrar
          </button>
          
      </form>
    </main>
  );
}

export default FormProducts;
