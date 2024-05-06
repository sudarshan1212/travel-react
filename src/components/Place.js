import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Place = () => {
  const [details, setDetails] = useState([]);
  const Loctaion = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setDetails(Loctaion.state.item);
    // setDetails
  }, []);
  console.log(Loctaion.state.item);
  const _id = details.Location;
  const handleDetails = () => {
    navigate(`/book/${_id}`, {
      state: {
        item: details,
      },
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-titleFont">{details.rooms}</h1>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center  px-3 py-2 hover:bg-slate-100  gap-2 rounded-lg">
            {" "}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            <button className="text-lg font-normal underline">Share</button>
          </div>

          <div className="flex items-center  px-3 py-2 hover:bg-slate-100 shadow-sm gap-2 rounded-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
            </svg>
            <button className="text-lg font-normal underline">Save</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-2 h-96 mt-4  w-full ">
        <div className="col-span-2 row-span-2 ">
          {" "}
          <img
            className="h-full w-full object-cover hover:opacity-90   rounded-lg"
            src={details.img}
            alt=""
          />
        </div>
        <div className="col-start-3">
          {" "}
          <img
            className="h-full w-full object-cover hover:opacity-80 rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            alt=""
          />
        </div>
        <div className="col-start-3 row-start-2">
          {" "}
          <img
            className="h-full w-full object-cover hover:opacity-80 rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            alt=""
          />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl ">{details.Location}</h1>
        <p className="font-thin">
          7 guests . 4bedrooms . 6 beds . 1.5 bathrooms
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="h-20 w-1/3 border py-5  items-center justify-center gap-4 mt-8 shadow rounded-lg flex">
            <div></div>
            <div className="flex items-center  px-2  gap-2 text-center">
              <div className="">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="3rem"
                  width="3rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M177.438 17.625c-36.363 63.13-6.562 132.455 51.593 167.906 73.338 44.71 85.25 182.336 197.44 180.032 18.768 37.002 32.436 74.428 42 113.844L486.624 475c-7.386-30.444-17.18-59.834-29.75-88.72 19.49-32.138 28.49-64.438 35.938-96.75L477.5 306.657c1.212-13.487.876-26.89-.688-41l-13.625 26.938c2.42-20.608 3.05-39.98 3.875-59.5l-19.53 33.97c-2.876-17.033-6.577-33.074-10.188-49.252l-8.25 30.97C371.358 118 210.67 101.476 177.438 17.624zM33.78 106c-83.367 187.217 151.31 342.733 292.44 323.47 29.146 16.715 54.977 35.964 78.905 58.436l12.78-13.625c-18.923-17.77-39.093-33.676-61-47.936-1.57-28.975-9.564-53.884-18.56-78.156l-6.22 42.843c-10.212-27.47-23.103-48.372-35.813-69.717l3.22 51.968c-9.037-24.734-22.188-45.01-36.032-64.53l5.094 42.97c-16.975-23.893-34.854-40.735-52.656-58.064l12.625 37.594C144.105 263.974 78.553 196.544 33.78 106z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="font-bold text-lg">
                Guest <br />
                Favourite
              </h2>
            </div>
            <div className="items-center flex flex-col  border-r-2  border-l-2 px-8 ">
              <h2 className="font-bold text-gray-700 text-xl">
                {details.rating}
              </h2>
              <div className="flex ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>
            </div>

            <div className="flex items-center  flex-col ">
              <h1 className="font-bold text-gray-700 text-xl ">61</h1>
              <p className="underline hover:text-slate-700">Reviews</p>
            </div>
          </div>

          <div className="w-1/3 border p-6 rounded-lg shadow-xl px-7 ">
            <p className="font-bold text-gray-700 text-3xl">
              {details.price} <span className="font-thin text-lg">Night</span>
            </p>
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-2 grid-rows-2  border border-black w-full rounded-lg   text-center px-auto ">
                <div className="border-gray-500 border text-left py-2 px-2 w-full rounded-tl-lg  ">
                  <h3 className="text-xs font-semibold">CHECK-IN</h3>
                  <p className="text text-xs font-thin">Add date</p>
                </div>
                <div className=" border-gray-500 border py-2 px-2 text-left w-full rounded-tr-lg  ">
                  {" "}
                  <h3 className="text-xs font-semibold">CHECK-IN</h3>
                  <p className="text text-xs font-thin">Add date</p>
                </div>
                <div className="col-span-2   w-full row-start-2 border text-left px-2  rounded-b-lg ">
                  <h3 className="text-sm mt-1 font-semibold">GUESTS</h3>
                  <p className="text text-xs font-thin">
                    1 <span className="font-thin text-sm">guest</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8">
              <button
                onClick={handleDetails}
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl w-full mt-4 focus:outline-none font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Reserve
              </button>
              <p className="font-thin text-sm">You won't be charged yet</p>
            </div>
            <div className="mt-6 ">
              <div className="flex justify-between text-lg mt-2">
                <p className="underline">₹10,740 x 5 nights</p>
                <p>₹53,698</p>
              </div>
              <div className="flex justify-between text-lg mt-2">
                <p className="underline">Cleaning fee</p>
                <p>₹53,698</p>
              </div>
              <div className="flex justify-between text-lg mt-2">
                <p className="underline">Jetset service fee</p>
                <p>₹53,698</p>
              </div>
            </div>
            <div className="mt-8 border-t-2 border-gray-300">
              <div className="flex justify-between text-xl font-semibold mt-2">
                <p className="">Total before taxes</p>
                <p>₹53,698</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
