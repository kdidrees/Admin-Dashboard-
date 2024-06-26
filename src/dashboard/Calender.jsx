import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="mt-20 2xl:mt-32 3xl:mt-48 w-auto">
      <div className="bg-white lg:w-72 rounded-lg xl:p-8 xl:w-80 2xl:w-96 2xl:p-0">
        <Calendar
          onChange={onChange}
          value={value}
          className=" border-gray-200 rounded-lg 3xl:w-[500px] 3xl:h-[400px] 3xl:text-2xl"
        />
      </div>
    </div>
  );
}
