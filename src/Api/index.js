import axios from 'axios';

export async function login() {
  const user = {
    email: 'emausleonardo123@gmail.com',
    password: 'Cwo2qcq0',
  };

  const response = await axios
    .post(
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
