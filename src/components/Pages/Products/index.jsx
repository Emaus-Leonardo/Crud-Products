import React from "react";

const products = [
  {
    id: 1,
    name: "Produto 1",
    descricao: "Descrição Produto 1",
    price: 10.0,
    quantidadeDoEstoque: 10,
  },
  {
    id: 2,
    name: "Produto 2",
    descricao: "Descrição Produto 2",
    price: 20.0,
    quantidadeDoEstoque: 20,
  },
  {
    id: 3,
    name: "Produto 3",
    descricao: "Descrição Produto 3",
    price: 30.0,
    quantidadeDoEstoque: 30,
  },
];

function ProductsPage() {
  return (
    <section className="w-full h-screen bg-[#F4F6F8] flex justify-center items-center">
      <div className="container w-[900px] h-[500px] py-5  mx-5 flex flex-col items-center bg-white rounded-md shadow-md">
        <h2 className="text-black text-2xl font-bold mb-8">
          Lista De Produtos
        </h2>

        <div className="w-full overflow-x-auto flex justify-center items-center px-2 ">
          <table className="w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
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
                  Quantity
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b border-gray-200">
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
                    {product.quantidadeDoEstoque}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
