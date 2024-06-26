import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
export default function Index() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
