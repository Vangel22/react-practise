import axios from "axios";

const REACT_DOMAIN_ENV = "this should be environment variable";

export const api = axios.create({
  // process.env.REACT_DOMAIN_ENV ??
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
// await api.get("/users")

api.interceptors.request.use(
  async (config) => {
    console.log("Request sent: ", config);

    return config;
  },
  (err) => {
    console.log("Error: ", err);
  }
);

api.interceptors.response.use(
  async (response) => {
    console.log("Response recieved: ", response);

    return response;
  },
  (err) => {
    console.log("Error: ", err);
  }
);

export const { token, cancel } = axios.CancelToken.source();
export default api;
