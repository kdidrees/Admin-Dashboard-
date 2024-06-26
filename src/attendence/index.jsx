import React from "react";
import Tabel from "./Tabel";
import Searchbar from "../sharedComponents/Searchbar";
import Pagination from "../sharedComponents/Pagination";

export default function Attendance() {
  return (
    <>
      <div>
        <Searchbar />
        <Tabel />
        <Pagination />
      </div>
    </>
  );
}
