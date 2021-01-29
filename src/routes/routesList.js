import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const GetStarted = lazy(() => import("pages/Auth/GetStarted"));
const Verify = lazy(() => import("pages/Auth/Verify"));
const Login = lazy(() => import("pages/Auth/Login"));
const Home = lazy(() => import("pages/Home"));
const Pay = lazy(() => import("pages/Pay"));
// const Save = lazy(() => import("pages/Save"));
const Transactions = lazy(() => import("pages/Transactions"));

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: GetStarted
  },
  {
    path: "/verify",
    exact: true,
    isPrivate: false,
    component: Verify
  },
  {
    path: "/login",
    exact: true,
    isPrivate: false,
    component: Login
  },
  {
    path: "*",
    exact: true,
    isPrivate: false,
    component: GetStarted
  },
  {
    path: "/",
    exact: true,
    isPrivate: true,
    component: Home
  },
  {
    path: "/pay",
    exact: true,
    isPrivate: true,
    component: Pay
  },
  {
    path: "/transactions",
    exact: true,
    isPrivate: true,
    component: Transactions
  },
  // {
  //   path: "/save",
  //   exact: true,
  //   isPrivate: true,
  //   component: Save
  // },
  {
    path: "*",
    exact: true,
    isPrivate: true,
    component: () => <Redirect to="/" />
  }
];

export default routes;
