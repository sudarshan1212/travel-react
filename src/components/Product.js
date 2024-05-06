import React, { useState } from "react";
import { Icon } from "./Icon";
import { filter } from "../assets/index";
import img from "../assets/image.json";
import data from "../assets/data.json";

// import {image}from '../assets/index'
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import classNames from "classnames";
import { ProductList } from "./ProductList";
export const Product = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto py-10  ">
      <div className="flex gap-16 items-center ">
        <div className="flex gap-10 items-center text-center w-5/6">
          {img.map((item, index) => (
            <Icon key={index} img={item} />
          ))}
        </div>
        <div
          onClick={() => setPopUp(true)}
          className="flex border-[1px] border-gray-400  h-12 px-5 items-center hover:border-gray-700 rounded-lg hover:bg-gray-100 duration-300"
        >
          <img src={filter} alt="filter" className="h-5 w-5 " />
          <button
            type="button"
            className="p-5 flex gap-2 font-titleFont font-medium "
          >
            Filters
          </button>
        </div>

        <div
          onClick={() => setIsSelected(!isSelected)}
          className="  flex items-center px-2 w-4/5  gap-2 rounded-lg border-[1px] border-gray-400 hover:border-gray-700  hover:bg-gray-100 duration-300 "
        >
          <div
            onClick={() => setIsSelected(!isSelected)}
            className={classNames(
              "items-center flex w-10 h-6 bg-gray-500 my-4 rounded-full",
              { "bg-red-400 ": isSelected }
            )}
          >
            <span
              className={classNames(
                "h-5 bg-white rounded-full w-5 transition-all duration-300 shadow-lg",
                {
                  "ml-5": isSelected,
                }
              )}
            ></span>
          </div>
          <button className="text-s font-titleFont">
            Display total before Taxes
          </button>
        </div>
      </div>
      {/*Producsts */}
      <div className="mt-12">
        <div className="flex  flex-col items-center">
          <h1 className="font-titleFont text-4xl">Elevate Your Travel </h1>
          <p className="font-bodyFont font-thin mt-3">
            Escape the Ordinary: Unlock a World of Unforgettable Experiences and
            Unparalleled{" "}
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-7">
          {data.map((item, index) => (
            <ProductList key={index} product={item} />
          ))}
        </div>
      </div>
      {popUp && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center  z-30">
          <div className="max-w-3xl bg-white p-10 rounded-3xl relative shadow-mg">
            <button
              onClick={() => setPopUp(false)}
              id="closebutton"
              className=" absolute right-5 top-5 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
// <Slider {...settings}>    </Slider>
