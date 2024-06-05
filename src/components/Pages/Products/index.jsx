import React, { useState, useEffect } from "react";
import FormProducts from "../../FormProducts";
import { Tooltip } from "@mui/material";
import { login } from '../../../Api/index';

const products = [
  {
    id: 1,
    name: "Produto 1",
    descricao: "Descrição Produto 1",
    price: 10.0,
    status: "Ativo",
    quantidadeDoEstoque: 10,
  },
  {
    id: 2,
    name: "Produto 2",
    descricao: "Descrição Produto 2",
    price: 20.0,
    status: "Inativo",
    quantidadeDoEstoque: 20,
  },
  {
    id: 3,
    name: "Produto 3",
    descricao: "Descrição Produto 3",
    price: 30.0,
    status: "Ativo",
    quantidadeDoEstoque: 30,
  },
];

function ProductsPage() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await login();
      console.log(response);
    })();
  }, []);

  return (
    <section className="w-full h-screen bg-[#F4F6F8] flex justify-center items-center">
      <div className="container md:w-[900px] w-[95%] h-[500px] py-5 mx-5 flex flex-col items-center bg-white rounded-md shadow-md">
        <div className="relative w-full flex justify-center items-center mb-5">
          <h2 className="text-black text-2xl font-bold">Lista De Produtos</h2>

          <button
            onClick={() => setOpenModal(true)}
            className="absolute right-4 md:right-12 bg-transparent border-solid border-[1px] border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#A8D5BA] hover:text-white transition-all duration-300 px-3 py-1 rounded-lg">
            <span className="block md:hidden text-[18px]">+</span>
            <span className="hidden md:block">+ Adicionar</span>
          </button>
        </div>

        <div className="w-full flex justify-center items-center">
          <span className="lg:w-[800px] w-[95%] h-[1px] bg-gray-700 mb-8 "></span>
        </div>

        <div className="w-full overflow-x-auto flex justify-center items-center px-2 ">
          <table className="w-full bg-white md:ml-0 ml-16">
            <thead>
              <tr>
                <th className="hidden py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Nome
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Preço
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Quantidade
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="hidden  py-2 px-4 border-b border-gray-200">
                    {product.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.descricao}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    R${product.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.status}
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
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-8 rounded-md shadow-md mx-4 w-full max-w-[450px]">
            <div className="flex justify-end">
              <Tooltip title="Close">
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
              <h2 className="text-black text-lg font-bold">Cadastro de Produtos</h2>
            </div>
            <FormProducts />
          </div>
        </div>
      )}
    </section>
  );
}


export default ProductsPage;
