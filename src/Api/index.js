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
        withCredentials: false,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

// Função de Editar Produtos
export async function editProduct(token, dados) {
  try {
    const response = await axios(
      {
        method: "PUT",
        url: 'http://34.71.240.100/api/product/update',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: dados,
        withCredentials: false,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

// Delete de produtos
export async function deleteProduct(token, dados) {
  try {
    const response = await axios({
      method: "DELETE",
      url: `http://34.71.240.100/api/product/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: { id: dados }, 
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}


