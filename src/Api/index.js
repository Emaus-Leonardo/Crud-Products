import axios from 'axios';

// Login que recebe o token para as requisições do CRUD
export async function login() {
  const user = {
    email: 'emausleonardo123@gmail.com',
    password: 'Cwo2qcq0',
  };

  const response = await axios.post(
    'http://34.71.240.100/api/auth/login',
    {
      email: user.email,
      password: user.password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    }
  )
    .then((res) => res.data)
    .catch((err) => err);
    console.error('Erro ao fazer login:', error);
  return response;
}

// Listagem dos Produtos
export async function listProducts(token) {
  try {
    const response = await axios(
      {
        method: "POST",
        url: 'http://34.71.240.100/api/product/list',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: false,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    return error;
  }
}

// Create de produtos
export async function createProducts(token, dados) {
  try {
    const response = await axios(
      {
        method: "POST",
        url: 'http://34.71.240.100/api/product/create',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: dados,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return error;
  }
}

// Função de Editar Produtos
export async function editProduct(token, id, data) {
  try {
    const response = await axios.put(
      'http://34.71.240.100/api/product/update',
      { id, ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao editar produto:', error);
    return error;
  }
}

// Delete de produtos
export async function deleteProduct(token, id) {
  try {
    const response = await axios({
      method: "DELETE",
      url: `http://34.71.240.100/api/product/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: { id }, 
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    return error;
  }
}


