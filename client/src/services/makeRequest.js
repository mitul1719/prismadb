import axios from "axios";
console.log(process.env.REACT_APP_SERVER_URL);
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  //   withCredentials: true,
});

export async function makeRequest(url, options) {
  try {
    const res = await api(url, options);
    return res.data;
  } catch (error) {
    return await Promise.reject(error?.response.data.message ?? "Error");
  }
}
