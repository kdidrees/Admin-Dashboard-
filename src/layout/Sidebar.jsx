import React from "react";
import { FaHouse } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import { BiCalendarExclamation } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbReport } from "react-icons/tb";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="w-50 xl:w-56 2xl:w-64 cursor-pointer border- 3xl:w-96  h-screen sticky top-0 left-0 flex flex-col gap-5 3xl:gap-8 bg-[#fffff] text-gray-500 font-[poppins] font-medium text-sm 2xl:text-lg 3xl:text-3xl shadow">
        <Link to={`/`}>
        <div className="flex justify-center ">
          <img
            src={logo}
            alt="logo"
            // height={30}
            // width={30}
            className="ml-6"
          />
        </div>
        </Link>
        <div className="px-2 3xl:px-4">
          <ul className="flex flex-col gap-3 2xl:gap-5 3xl:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-black text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2  hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <FaHouse
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li className="text-xl">Create Property</li>
              </div>
            </NavLink>
            <NavLink
              to="/all-properties"
              className={({ isActive }) =>
                isActive ? "bg-black text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <BsPersonFillCheck
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li className="lg:text-xl mt-4">All Properties</li>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
