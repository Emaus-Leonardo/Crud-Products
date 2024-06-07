import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "@mui/material";
import { Pencil, Trash } from "@phosphor-icons/react";
import { DataGrid } from "@mui/x-data-grid";
import FormProducts from "../../FormProducts";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { login, listProducts, deleteProduct } from '../../../Api/index';

function ProductsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [editProducts, setEditProducts] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [paginationModel, setPaginationModel] = useState({ pageSize: 6, page: 0 });
  const formRef = useRef();

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return "Em Estoque";
      case 2:
        return "Em Reposição";
      case 3:
        return "Em Falta";
      default:
        return "";
    }
  };

  // ffunção que faz a listagem de produtos 
  const fetchProducts = async () => {
    try {
      const tokenResponse = await login(); //aonde o login é feito e o token é reotnado
      const productListResponse = await listProducts(tokenResponse.access_token);
      const productList = productListResponse.data;
      setProducts(productList); //aqui é onde acoore a atualização da lista 
      console.log(productList);
    } catch (error) {
      console.error("Erro ao carregar os produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    { field: 'name', headerName: 'Nome', width: 150 },
    { field: 'description', headerName: 'Descrição', width: 200 },
    { field: 'price', headerName: 'Preço', width: 110, renderCell: (params) => `R$${params.value.toFixed(2)}` },
    { field: 'status', headerName: 'Status', width: 150, renderCell: (params) => getStatusText(params.value) },
    { field: 'stock_quantity', headerName: 'Quantidade', width: 150 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 90,
      sortable: false,
      renderCell: (params) => (
        <div className="flex py-4 gap-3">
          <button
            onClick={() => handleEdit(params.row.id)}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            <Pencil size={20} />
          </button>
          <button
            onClick={() => handleDelete(params.row.id)}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            <Trash size={20} />
          </button>
        </div>
      ),
    },
  ];

  // função de edição do produto
  const handleEdit = async (id) => {
    try {
      const productToEdit = products.find(product => product.id === id);
      setEditProducts(productToEdit);
      setOpenModal(true);
      setIsEditing(true);
      console.log("Produto selecionado para edição:", productToEdit);
    } catch (error) {
      console.error("Erro ao editar o produto:", error);
    }
  };

  // função que deleta o produto
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Você tem certeza que deseja deletar este produto?");

    if (!confirmed) {
      return;
    }
    try {
      const tokenResponse = await login();
      await deleteProduct(tokenResponse.access_token, id);
      setProducts(products.filter(product => product.id !== id)); //atualiza a lista assim que o produto é deletado 
      console.log("Produto deletado com sucesso");
      toast.success("Produto deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
      toast.error("Erro ao deletar produto.");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsEditing(false); // Reseta o edit do form 
    setEditProducts(null); // Reseta o produto em edição
    if (formRef.current) {
      formRef.current.resetForm(); // Reseta o formulário por completo
    }
  };


  return (
    <section className="w-full h-screen bg-[#F4F6F8] flex justify-center items-center">
      <ToastContainer
        position="bottom-left" 
        toastStyle={{ backgroundColor: "#fff" }} 
        bodyStyle={{ color: "#333" }}
      />
      <div className="container md:w-[900px] w-[95%] h-[530px] md:mt-0 mt-20 py-5 mx-5 flex flex-col items-center bg-white rounded-md shadow-custom">
        <div className="relative w-full flex justify-center items-center mb-5">
          <h2 className="text-black text-2xl font-bold">Lista De Produtos</h2>

          <button
            onClick={() => setOpenModal(true)}
            className="absolute right-4 md:right-12 bg-transparent border-solid border-[1px] border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300 px-3 py-1 rounded-lg">
            <span className="block md:hidden text-[18px]">+</span>
            <span className="hidden md:block">+ Adicionar</span>
          </button>
        </div>

        <div className="w-full flex justify-center items-center">
          <span className="lg:w-[800px] w-[95%] h-[1px] bg-gray-700 mb-8 "></span>
        </div>

        <div className="w-full flex justify-center items-center px-2 ">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={paginationModel.pageSize}
              rowsPerPageOptions={[paginationModel.pageSize]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pagination
            />
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed z-20 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-8 rounded-md shadow-md mx-4 w-full max-w-[450px] md-mt-0 mt-20">
            <div className="flex justify-end">
              <Tooltip title="Close">
                <button
                  onClick={handleCloseModal}
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
            <div className="flex flex-col justify-center items-center mb-10 mt-5">
              <h2 className="text-black text-lg font-bold">Cadastro de Produtos</h2>
            </div>
            <FormProducts
              ref={formRef}
              isEditing={isEditing} //passa se esta em edição
              editingProduct={editProducts} //passa o produto para edição 
              onCloseModal={handleCloseModal}
              onProductCreated={fetchProducts} //função que busca o produto ao criar ou editar 
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductsPage;
