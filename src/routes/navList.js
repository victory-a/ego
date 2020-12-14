import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";

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
    path: "/transactions",
    title: "Transactions",
    logo: <FaExchangeAlt />
  }
  // {
  //   path: "/save",
  //   title: "Save",
  //   logo: <RiSafeFill />
  // }
];
