import React, { useState } from "react";
import { banner } from "../assets/index";
import data from "../assets/data.json";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { travelDate } from "../redux/TravelSlice";
export const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [selectedDate, setSelectedDate] = useState(simpleDateFormat);
  const [filterUser, setFilterUser] = useState([]);
  
  
  



  


  const handeSearchChange = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredUser = data.filter((datas) =>
      datas.Location.toLowerCase().includes(search)
    );

    setFilterUser(filteredUser);
  };

  const handleDetails = (e) => {
    const search = e.target.innerText;
    const string = String(search).toLowerCase().split(",")[0];

    navigate(`/stays/${string}`, {
      state: {
        item: filterUser.filter((item) => item.Location === search)[0],
      },
    });
  };

  return (
    <div className="relative">
      <div className="absolute m-auto left-0 right-0 top-0 bottom-0 h-2/3 w-2/3 ">
        <div className="flex flex-col items-center p-2">
          <h1 className="text-7xl text-center px-44 font-titleFont">
            Discover the World of travle
          </h1>
          <h2 className="mt-10 font-bodyFont text-white font-semibold text-xl">
            Unlock serets of Unforgettable Adventures
          </h2>
          <div className="border-2 bg-white mt-6 rounded-lg border-blue-400  ">
            <input
              type="text"
              className="px-2 rounded-lg w-96 outline-none"
              onChange={handeSearchChange}
            />

            <input
              id="dateInput"
              type="date"
              className="outline-none mr-2"
              onChange={(e) => setSelectedDate(e.target.value)}
              value={selectedDate}
              onClick={() =>
                dispatch(
                  travelDate({
                    returnDate: returnDate[1],
                    depatureDate: depatureDate[1],
                  })
                )
              }
            />

            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br    shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              Book your Trip
            </button>
          </div>
          {filterUser.map((item, index) => (
            <div key={index} className=" bg bg-white w-2/3 overflow-auto">
              <ul>
                <li
                  onClick={handleDetails}
                  className="hover:bg-slate-100 duration-150 px-3 flex items-center gap-2 py-1  "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                    ></path>
                  </svg>
                  {item.Location}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <img src={banner} alt="" />
    </div>
  );
};
