import React, { useState } from "react";

import FormProducts from "../../FormProducts"
import { Tooltip } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Produto 1",
    descricao: "Descrição Produto 1",
    status: "Ativo",
    price: 10.0,
    quantidadeDoEstoque: 10,
  },
  {
    id: 2,
    name: "Produto 2",
    descricao: "Descrição Produto 2",
    status: "Inativo",
    price: 20.0,
    quantidadeDoEstoque: 20,
  },
  {
    id: 3,
    name: "Produto 3",
    descricao: "Descrição Produto 3",
    status: "Ativo",
    price: 30.0,
    quantidadeDoEstoque: 30,
  },
];

function ProductsPage() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="w-full h-screen bg-[#F4F6F8] flex justify-center items-center">
      <div className="container w-[900px] h-[500px] py-5 mx-5 flex flex-col items-center bg-white rounded-md shadow-md">
        <div className="relative w-full flex justify-center items-center mb-5">
          <h2 className="text-black text-2xl font-bold">
            Lista De Produtos
          </h2>
          <button
            onClick={() => setOpenModal(true)}
            className="absolute right-12 bg-transparent border-solid border-[1px] border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#A8D5BA] hover:text-white transition-all duration-300 px-3 py-1 rounded-lg">
            + Adicionar
          </button>
        </div>

        <div className="w-full flex justify-center items-center ">
          <span className="w-[800px] h-[1px] bg-gray-700 mb-8"></span>
        </div>

        <div className="w-full overflow-x-auto flex justify-center items-center px-2 ">
          <table className="w-full bg-white">
            <thead>
              <tr>
                <th className="hidden py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Quantity
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="hidden py-2 px-4 border-b border-gray-200">
                    {product.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.descricao}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.status}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    R${product.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.quantidadeDoEstoque}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    {openModal && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-8 rounded-md shadow-md">
      <div className="flex justify-end">
        <Tooltip title='Close' >
          <button
            onClick={() => setOpenModal(false)}
            className="hover:scale-105 transition-all duration-200"
          >
            <div className="w-3 h-3 bg-red-600 rounded-full "></div>
          </button>
          </Tooltip>

        <Tooltip title="Minimize">
          <button className="hover:scale-105 transition-all duration-200">
            <div className="w-3 h-3 bg-yellow-300 rounded-full ml-2"></div>
          </button>
          </Tooltip>

          <Tooltip title="Maximize">
          <button className="hover:scale-105 transition-all duration-200">
            <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
          </button>
          </Tooltip>
        
      </div>
      <div className="flex flex-col justify-center items-center mb-14 mt-5">
        <h2 className=" text-black text-lg font-bold ">
          Cadastro de Produtos
        </h2>
      </div>
      <FormProducts />
    </div>
  </div>
)}


    </section>
  );
}

export default ProductsPage;
