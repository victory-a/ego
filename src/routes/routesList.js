import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const Login = lazy(() => import("pages/Auth/Login"));
const CreateAccount = lazy(() => import("pages/Auth/CreateAccount"));
const ForgotPassword = lazy(() => import("pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("pages/Auth/ResetPassword"));
const Home = lazy(() => import("pages/Home"));
const Profile = lazy(() => import("pages/Profile"));

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: Login
  },
  {
    path: "/create-account",
    exact: true,
    isPrivate: false,
    component: CreateAccount
  },
  {
    path: "/forgot-password",
    exact: true,
    isPrivate: false,
    component: ForgotPassword
  },
  {
    path: "/reset-password",
    exact: true,
    isPrivate: false,
    component: ResetPassword
  },
  {
    path: "*",
    exact: true,
    isPrivate: false,
    component: Login
  },
  {
    path: "/",
    exact: true,
    isPrivate: true,
    component: Home
  },
  {
    path: "/profile",
    exact: true,
    isPrivate: true,
    component: Profile
  },
  {
    path: "*",
    exact: true,
    isPrivate: true,
    component: () => <Redirect to="/" />
  }
];

export default routes;
