import axios from "axios";

const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
    localStorage.setItem("AutoLogout", true);
  }
  return response;
};

const errorHandler = (error) => {
  if ([401, 403].includes(error.response.status)) {
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
