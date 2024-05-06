import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
export const BookingHeader = () => {
  return (
    <div className="top-0 z-50 w-full  bg-white h-20 flex items-center px-5   justify-between   shadow sticky  ">
       <Link to={"/"}>
        <div className="flex gap-1">
          <img src={logo} className="h-8 w-8" alt="logo" />
          <div className="font-headingFont text-2xl font-bold  text-red-600">
            JetSet
          </div>
        </div>
      </Link>
    </div>
  );
};
