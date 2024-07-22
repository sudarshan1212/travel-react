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
