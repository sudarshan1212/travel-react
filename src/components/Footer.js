import React from "react";
import { logo } from "../assets/index";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-red-500 text-white py-14 font-bodyFont text-m mt-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
        <div>
          <img src={logo} alt="logo" className="h-6/12 w-6/12" />
          <p className="mt-10">
            © 2024 Jetset,. Inc.
            <br /> All rights reserved.
          </p>
        </div>
        <div className="flex flex-col  justify-center">
          <h2 className="font-bold text-2xl">Explore</h2>
          <div className="flex flex-col mt-2 ">
            {" "}
            <p className="hover:text-gray-200 transform duration-200">
              Destination
            </p>
            <p className="hover:text-gray-200 transform duration-200">
              Experience
            </p>
            <p className="hover:text-gray-200 transform duration-200">offers</p>
            <p className="hover:text-gray-200 transform duration-200">Blog</p>
          </div>
        </div>
        <div className="flex flex-col  justify-center">
          <h2 className="font-bold text-2xl">Connect</h2>
          <div className="flex flex-col mt-2 ">
            {" "}
            <p className="hover:text-gray-200 transform duration-200">
              Support
            </p>
            <p className="hover:text-gray-200 transform duration-200">FAQs</p>
            <p className="hover:text-gray-200 transform duration-200">
              Contact Us
            </p>
            <p className="hover:text-gray-200 transform duration-200">
              Newletter
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col  justify-center">
          <h2 className="font-bold text-2xl">About</h2>
          <div className="flex flex-col mt-2 ">
            {" "}
            <p className="hover:text-gray-200 transform duration-200">
              Our Story
            </p>
            <p className="hover:text-gray-200 transform duration-200">
              Carrers
            </p>
            <p className="hover:text-gray-200 transform duration-200">Team</p>
            <p className="hover:text-gray-200 transform duration-200">
              Sustainablity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
