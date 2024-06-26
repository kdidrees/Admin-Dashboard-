import React from "react";
import Tabel from "./Tabel";
import Searchbar from "../sharedComponents/Searchbar";
import Pagination from "../sharedComponents/Pagination";

export default function Report() {
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
