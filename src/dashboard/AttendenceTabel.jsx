import React from "react";

export default function AttendanceTable() {
  const data = [
    {
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      name: "Hasmuddin",
      department: "Marketing",
      age: 21,
      active: 100,
      status: "Pending",
    },
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      name: "John Doe",
      department: "HR",
      age: 30,
      active: 150,
      status: "Active",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: "Jane Smith",
      department: "IT",
      age: 25,
      active: 120,
      status: "Inactive",
    },
  ];

  return (
    //  ml-0 xl:ml-10
    <div className=" w-[450px]  mt-5 xl:w-[600px] 2xl:w-[780px]">
      <div className="font-inter ml-[-20px] font-semibold flex justify-between py-2 px-6 xl:py-3 xl:px-4 xl:ml-0 2xl:ml-[-10px] 2xl:px-4 ">
        <h2 className="xl:text-[20px] 2xl:text-2xl">Attendance Table</h2>
        <button className="text-[10px] xl:text-[12px] text-[#5128A7] 2xl:text-[16px]">
          View All ({data.length})
        </button>
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-sm xl:text-md font-medium text-[#333] 2xl:text-lg font-[roboto]">
            <tr className="">
              <th className="xl:py-2 xl:px-4 2xl:py-5 2xl:px-5 text-left">
                Employees Name
              </th>
              <th className="xl:py-2 xl:px-4 2xl:py-4 2xl:px-4 text-left">
                Department
              </th>
              <th className="py-1 px-2 xl:py-2 xl:px-4 2xl:py-4 2xl:px-6 text-left">
                Age
              </th>
              <th className="py-1 px-2 xl:py-2 xl:px-4 2xl:py-4 2xl:px-6 text-left">
                Active
              </th>
              <th className="py-1 px-2 xl:py-2 xl:px-4 2xl:py-4 2xl:px-6 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-xs xl:text-sm font-medium font-[roboto] 2xl:text-lg">
            {data.map((row, index) => (
              <tr key={index} className="">
                <td className="py-2 px-1 xl:py-3 xl:px-4 2xl:py-4 2xl:px-5">
                  <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-5">
                    <img
                      src={row.image}
                      alt="Employee"
                      className="h-10 w-10 rounded-full 2xl:h-14 2xl:w-14"
                    />
                    <p>{row.name}</p>
                  </div>
                </td>
                <td className=" py-1 px-2 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {row.department}
                </td>
                <td className="py-1 px-2 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {row.age}
                </td>
                <td className="py-1 px-2 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {row.active}
                </td>
                <td className="py-1 px-2 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  <span
                    className={
                      row.status === "Active"
                        ? "bg-green-200 shadow text-green-800 py-1 px-3 xl:py-1 xl:px-5 2xl:py-2 2xl:px-6  rounded-lg"
                        : row.status === "Pending"
                        ? "bg-blue-200 shadow text-blue-800 py-1 px-2 xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                        : row.status === "Inactive"
                        ? "bg-red-200 text-red-800 shadow py-1 px-2 xl:py-1 xl:px-4 2xl:py-2 2xl:px-4 rounded-lg"
                        : ""
                    }
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
