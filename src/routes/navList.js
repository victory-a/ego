import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { RiSafeFill } from "react-icons/ri";

export default [
  {
    path: "/",
    title: "Home",
    logo: <AiFillHome />
  },
  {
    path: "/pay",
    title: "Pay",
    logo: <IoIosWallet />
  },
  {
    path: "/save",
    title: "Save",
    logo: <RiSafeFill />
  }
];
