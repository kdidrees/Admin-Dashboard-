import React from "react";
import { CiLocationOn } from "react-icons/ci";


export default function AllProperty() {
  return (
    <>
      <div className="mx-16 mt-48">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded p-4 mb-4 flex justify-between md:flex-row flex-col">
          <div className="flex-shrink-0">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/"
              alt="Map 1"
              className="h-full  object-cover rounded"
            />
          </div>
          <div className="ml-4 mx-auto px-8 flex flex-col justify-between">
            <div className="flex items-center mb-2 flex-col">
              <h2 className="md:text-3xl text-xl font-semibold font-poppins">
                543 Jersey Foarm Road
              </h2>

              <div className="flex">
              <span className="mt-3"><CiLocationOn style={{fontSize:'1.7rem'}} /></span>
                <p className="ml-2 font-sans md:text-xl text-base mt-3 text-gray-500"> Richmond Place 1312, Charlotte, New York</p>
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <div className="mr-4 mt-2">
                <p className="font-sans md:text-xl text-base"> Apartment <span>| by Robin johnson</span> </p>
               
              </div>
              <div className="mt-2 flex flex-row">
                <p>Мод: Zombie Mod</p>
                <p>Карта: cs_italy</p>
                <p>Игроки: 24/32</p>
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
