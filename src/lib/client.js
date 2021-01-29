import axios from "axios";
import config from "config";
import { getToken } from "./auth";

export default async function client(endpoint, { body, ...customConfig } = {}) {
  const token = getToken();
  const headers = { "Content-type": "application/json; charset=UTF-8" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const params = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) params.data = JSON.stringify(body);

  const { data } = await axios(`${config.BASE_URL}/${endpoint}`, params);
  return data;
}

/** Axios interceptors to transform error message for clientFn */
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error.response.data.error);
  }
);
