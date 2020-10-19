import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";

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
    logo: <BiTransfer />
  }
];
