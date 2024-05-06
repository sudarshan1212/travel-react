import React from "react";

export const Booking = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className=" text-5xl font-semibold ">Request to book</h1>
        <div className="flex justify-between mt-10">
          {/* Yoir tirp */}
          <div className=" mr-14 w-2/4">
            <div>
              <h2 className=" text-2xl font-semibold ">Your Trip</h2>
              <div className="flex justify-between mt-8 ">
                <div>
                  <h2 className="font-semibold">dates</h2>
                  <p>12-17 may</p>
                </div>
                <div>
                  <p>Edit</p>
                </div>
              </div>
              <div className="flex justify-between mt-8 border- border-b-slate-300 border-b pb-4 ">
                <div>
                  <h2 className="font-semibold">dates</h2>
                  <p>12-17 may</p>
                </div>
                <div>
                  <p>Edit</p>
                </div>
              </div>
              <div className="mt-5">
                <h2 className=" text-2xl font-semibold mt-2">
                  Log in or sign up to book
                </h2>
                <form action="">
                  <div className=" border px-2 py-4 rounded-lg mt-4 ">
                    <input
                      className="w-full outline-none"
                      type="number"
                      name=""
                      id=""
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <button
                    // onClick={handleDetails}
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl w-full mt-4 focus:outline-none font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Continue
                  </button>
                </form>
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <span class="flex-shrink mx-4 text-gray-400">or</span>
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <div
                  // onClick={handleGoogleLogin}
                  className="text-base h-12 tracking-wide border-[1px] border-gray-400 py-8 rounded-md flex justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 items-center "
                >
                  <img
                    src="https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"
                    alt="googleLogo"
                  />
                  <span className="text-sm text-gray-900">
                    Sign in with google{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* confirm */}
          <div className="  w-1/2 shadow-md rounded ">
            <div className="border px-12 py-8">
              <div className="flex gap-20 items-center  border-b-2 pb-8">
                <div className="w-36 h-36 rounded-lg">
                  {" "}
                  <img
                    className="w-full h-full rounded-lg"
                    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    Cabin with stunning fjord view
                  </p>
                  <p>Entire cabin</p>
                  <div className="flex items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    <p>4.88 (99 reviews)</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold mt-8">Price Details</h1>
                <div className="flex justify-between text-lg mt-6">
                  <p className="underline">Cleaning fee</p>
                  <p>₹53,698</p>
                </div>
                <div className="flex justify-between text-lg mt-2">
                  <p className="underline">Jetset service fee</p>
                  <p>₹53,698</p>
                </div>
                <div className="mt-10 pt-5 border-t-2 ">
                  <div className="flex justify-between text-xl font-semibold mt-2">
                    <p className="">Total before taxes</p>
                    <p>₹53,698</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
