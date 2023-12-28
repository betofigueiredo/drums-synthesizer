import axios, { InternalAxiosRequestConfig } from "axios";
import retrieveToken from "../retrieveToken";
import objects from "../objects";
// import handleLocalStorage from "utils/handleLocalStorage";

const mainInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

mainInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const params = objects.transform.toSnakeCase(config.params || {});
  const data = objects.transform.toSnakeCase(config.data || {});
  config.params = params;
  config.data = data;
  const token = retrieveToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  config.headers["Cache-Control"] = "no-cache";
  return config;
});

mainInstance.interceptors.response.use((response) => {
  const data = objects.transform.toCamelCase(response?.data || {});
  response.data = data;
  return response;
});

const get = <T>(url: string, params = {}): Promise<T> =>
  mainInstance.get(url, { params });
const post = <T>(url: string, params = {}): Promise<T> =>
  mainInstance.post(url, params);
const put = <T>(url: string, params = {}): Promise<T> =>
  mainInstance.put(url, params);
const del = <T>(url: string): Promise<T> => mainInstance.delete(url);

const makeRequest = { get, post, put, del };

export default makeRequest;
