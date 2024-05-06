import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProductList = ({ product }) => {
  const date = useSelector((state) => state.travel.value);
  // let returnDate = date.returnDate.split(" ").join('');
  // let depature = date.depatureDate.split(" ");
  console.log(date);
  const navigate = useNavigate();
  const _id = product.Location;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(",")[0];
  };

  const rootId = idString(_id);
  // console.log(rootId);
  const handleDetails = () => {
    navigate(`/stays/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="w-full group hover:shadow-lg duration-150 ">
      <div
        className="w-full    relative rounded-lg overflow-hidden"
        onClick={handleDetails}
      >
        <div className="absolute z-10 right-0 h-8 w-14 justify-center shadow-md bg-blue-500 text-white text-center flex rounded-s-lg  items-center py-4">
          <svg
            className="w-4 h-4 text-yellow-300 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p
            className="ms-1 text-sm font-bold text-gray-900 dark:text-white
         "
          >
            {product.rating}
          </p>
        </div>
        <div className="w-full h-96 cursor-pointer overflow-hidden">
          <img
            className="rounded-lg shadow-lg w-full h-full object-cover object-cover group-hover:scale-110 duration-500  "
            src={product.img}
            alt="img"
          />
        </div>

        <div className="flex flex-col  pt-2  px-2 hover:bg-gray-100 duration-150">
          <h2 className=" font-headingFont text-lg font-semibold ">
            {product.Location}
          </h2>
          <p className=" font-thin font-bodyFont ">{product.date}</p>
          <p className="  font-bodyFont  ">
            <span className="font-medium">{product.price}</span> Night
          </p>
        </div>
      </div>
    </div>
  );
};
