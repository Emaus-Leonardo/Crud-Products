import axios from 'axios';

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