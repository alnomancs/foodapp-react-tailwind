import React, { useState } from "react";

import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 border ">
      {/* { left side} */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl ">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm">
          <p className="bg-black text-white rounded-full p-2"> Delivery</p>
          <p className="p-2"> Pickup</p>
        </div>
      </div>

      {/* { search input} */}
      <div className="bg-gray-200 rounded-full sm:w-[400px] lg:w-[500px] flex items-center px-2 w-[200px]">
        <AiOutlineSearch />
        <input
          className="bg-transparent p-2 w-full foc outline-none"
          type="text"
          placeholder="Search Food"
        />
      </div>

      {/* { cart button} */}
      <div>
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          {" "}
          <BsFillCartFill className="mr-2" size={20} /> Cart
        </button>
      </div>

      {/* { mobile menu} */}
      {/* { overlay} */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0"></div>
      ) : (
        ""
      )}

      {/* { side draw menu} */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-2 items-center">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="flex text-xl py-2 items-center">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="flex text-xl py-2 items-center">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="flex text-xl py-2 items-center">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="flex text-xl py-2 items-center">
              <AiFillTag size={25} className="mr-4" />
              Promotion
            </li>
            <li className="flex text-xl py-2 items-center">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="flex text-xl py-2 items-center">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
