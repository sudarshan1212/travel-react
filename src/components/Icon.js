import React from "react";
import { logo } from "../assets/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Icon = ({ img }) => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
  };
  return (
    // <Slider {...settings}>
    <div className=" text-center flex flex-col items-center  hover:text-gray-800 hover:scale-110 duration-150 ">
      <img src={img.img} alt="logo" className="h-8 w-10 mb-1" />
      <p className="font-bodyFont font-thin ">{img.name}</p>
    </div>
    // </Slider>
  );
};
