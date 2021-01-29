import { queryCache, useQuery } from "react-query";
import config from "config";
import client from "./client";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function getToken() {
  let token = null;
  const userToken = Cookies.get(config.TOKEN);

  if (userToken) {
    token = JSON.parse(userToken);
    return token;
  }

  return token;
}

function checkTokenValidity(returnFn) {
  const token = getToken();
  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) returnFn();
  }
}

async function getUser() {
  const token = getToken();

  if (!token) {
    return Promise.resolve(null);
  }

  try {
    return await client("auth/currentuser");
  } catch (error) {
    logout();

    return Promise.reject(error);
  }
}

async function validateUser(payload) {
  const response = await client("auth/validate", { body: payload });
  return response;
}

async function handleUserResoponse({ token }) {
  if (token) {
    await Cookies.set(config.TOKEN, JSON.stringify(token), {
      expires: 1,
      secure: process.env.NODE_ENV === "production"
    });
  }

  try {
    return await client("auth/currentuser");
  } catch (error) {
    logout();

    return Promise.reject(error);
  }
}

async function register(payload) {
  const response = await client("auth/register", { body: payload });
  return handleUserResoponse(response);
}

async function login(payload) {
  const response = await client("auth/login", { body: payload });
  return handleUserResoponse(response);
}

function logout() {
  Cookies.remove(config.TOKEN);
  return Promise.resolve();
}

// react query utils
function fetchUserDetails() {
  return queryCache.getQueryData("user");
}

// synchronize the current user object value (if any) with the user value from authContext
function useUserDetails() {
  let user;
  const { data, status } = useQuery("userDetails", fetchUserDetails);

  if (data) user = data.user;
  else user = null;
  return { user, status };
}

export {
  getToken,
  validateUser,
  getUser,
  register,
  login,
  logout,
  checkTokenValidity,
  useUserDetails
};
