import React from "react";
import Cards from "../sharedComponents/Cards";
import Title from "./Title";
import AttendanceTable from "./AttendenceTabel";
import Calendar from "./Calender";
import Graph from "./Graph";

export default function DashBoard() {
  return (
    <>
      <div className="flex justify-center gap-4 3xl:gap-20 3xl:mr-[-150px]">
        <div className="flex flex-col justify-start  2xl:ml-8 xl:ml-10 mt-20  2xl:mt-32 3xl:mt-48 3xl:ml-[-185px] ">
           <Title />
          <Cards />
          <Graph />
          <AttendanceTable /> 
        </div>
        <div>
          {/* <Calendar /> */}
          <h1 className="text-black text-2xl font-bold">hello world</h1>
        </div>
      </div>
    </>
  );
}
