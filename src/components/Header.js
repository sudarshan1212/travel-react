import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
export const Header = () => {
  return (
  //   <div className="h-20 w-full bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
  //   <div className=" h-full mx-auto flex items-center justify-between">
  //     <Link to={"/"}>
  //       <div>
  //         <img src={logo} alt="logoLight" className="w-30 h-16" />
  //       </div>
  //     </Link>
  //     <div className="flex mr-8 gap-8">
  //       <ul className="flex items-center gap-8 ">
  //         <Link to={"/"}>
  //           <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
  //             Home
  //           </li>
  //         </Link>
  //         <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
  //           Pages
  //         </li>
  //         <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
  //           Shop
  //         </li>
  //         <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
  //           Element
  //         </li>
  //         <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
  //           Blog
  //         </li>
  //       </ul>
  //       <div className="relative flex gap-8">
  //         <Link to="/cart">
          
  //         </Link>
  //         <Link to="/login">
          
  //         </Link>

        
  //       </div>
  //     </div>
  //   </div>
  // </div>
    <div className="top-0 z-50 w-full h-20 flex items-center px-5  bg-gray-100 justify-between  border-b-[1px] shadow-lg sticky  ">
      <Link to={"/"}>
        <div className="flex gap-1">
          <img src={logo} className="h-8 w-8" alt="logo" />
          <div className="font-headingFont text-2xl font-bold  text-red-600">
            JetSet
          </div>
        </div>
      </Link>
      <div className="flex gap-16  z-10 text-gray-600 font-titleFont  font-semibold text-lg shadow-lg shadow-slate-300 p-3 px-16  rounded-2xl mx-12">
        <div className=" rounded-3xl py-2 px-6  hover:bg-gray-200 duration-300 ">
          Stays
        </div>

        <div className=" rounded-3xl py-2 px-6  hover:bg-gray-200 duration-300">
          International
        </div>
        <div className=" rounded-3xl py-2 px-6  hover:bg-gray-200 duration-300">
          Domestic
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Book Now
        </button>
        <img
          src=""
          className="h-8 w-8 rounded-full border border-red-700"
          alt="s"
        />
      </div>
    </div>
  );
};
