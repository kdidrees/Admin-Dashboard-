import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TbRulerMeasure } from "react-icons/tb";
import { FaHammer } from "react-icons/fa";

export default function AllProperty() {
  return (
    <>
      <div className="xl:mx-16 mt-48">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded p-4 mb-4 flex justify-between xl:flex-row flex-col">
          <div className="flex-shrink-0">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/"
              alt="Map 1"
              className="h-full  object-cover rounded"
            />
          </div>
          <div className="ml-4 mx-auto px-8 flex flex-col justify-between">
            <div className="flex  mb-2 flex-col">
              <h2 className="xl:text-3xl text-2xl xl:mt-4 mt-6 font-semibold font-roboto">
                543 Jersey Foarm Road
              </h2>

              <div className="flex">
                <span className="mt-3">
                  <CiLocationOn style={{ fontSize: "1.7rem" }} />
                </span>
                <p className="xl:ml-2 ml-0 font-sans xl:text-xl text-base mt-3 text-gray-500">
                  {" "}
                  Richmond Place 1312, Charlotte, New York
                </p>
              </div>
            </div>
            <div className="flex  mb-2 flex-col">
              <h2 className="xl:text-3xl text-xl font-semibold font-roboto">
                $175,000
              </h2>

              <div className="">
                <div className="xl:ml-2 ml-0 font-sans xl:text-xl text-base mt-3 text-gray-500 flex">
                  <div className="">
                    <p className="xl:text-2xl text-xl text-black font-bold font-sans">
                      3 <span className="font-normal">bed</span>
                    </p>
                  </div>
                  <div className="mx-4">
                    <p className="xl:text-2xl text-xl text-black font-bold font-sans">
                      1 <span className="font-normal">bath</span>
                    </p>
                  </div>
                  <div className="mx-4">
                    <p className="xl:text-2xl text-xl text-black font-bold font-sans">
                      1,587 <span className="font-normal">sqft</span>
                    </p>
                  </div>
                  <div className="mx-4">
                    <p className="xl:text-2xl text-xl text-black font-bold font-sans">
                      1.67 <span className="font-normal">acre lot</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="flex justify-between  flex-col">
              <div className="mt-2 flex flex-row">
                <div class="flex items-center gap-4 ">
                  <FaHouseChimneyWindow style={{ fontSize: "3.2rem" }} />
                  <div>
                    <p class="block antialiased font-sans xl:text-2xl  text-xl  leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                      Single Family
                    </p>
                    <p class="block antialiased font-sans xl:text-xl text-base  text-gray-500 font-normal">
                      property type
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-4 mx-8">
                  <SlCalender style={{ fontSize: "3.2rem" }} />
                  <div>
                    <p class="block antialiased font-sans  xl:text-2xl  text-xl   leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                      6 days
                    </p>
                    <p class="block antialiased font-sans xl:text-xl text-base leading-normal text-gray-700 font-normal">
                      Time on Realtor.com
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-4 mx-8">
                  <TbRulerMeasure style={{ fontSize: "3.2rem" }} />
                  <div>
                    <p class="block antialiased font-sans  xl:text-2xl  text-xl   leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                      John Doe
                    </p>
                    <p class="block antialiased font-sans xl:text-xl text-base leading-normal text-gray-700 font-normal">
                      2022-08-15
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between  flex-col">
              <div className="mt-2 flex flex-row">
                <div class="flex items-center gap-4 ">
                  <FaHammer style={{ fontSize: "3.2rem" }} />
                  <div>
                    <p class="block antialiased font-sans xl:text-2xl  text-xl  leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                      1976
                    </p>
                    <p class="block antialiased font-sans xl:text-xl text-base  text-gray-500 font-normal">
                      Year Built
                    </p>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>

        {/* Show All Servers Button */}
        {/* <div className="flex justify-center mt-4">
      <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded w-full">
        Показать все игровые серверы
      </button>
    </div> */}
      </div>
    </>
  );
}
