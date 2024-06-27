import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProperty() {
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="editor mx-auto w-10/12 mt-44 flex flex-col text-gray-800 border  p-4 shadow-lg max-w-5xl">
        <h1 className="heading text-center font-bold text-3xl m-5 pb-6 text-black">
          Create New Property Listing
        </h1>

        <input
          className=" bg-gray-100 border md:text-xl  border-gray-300 p-4  mb-4 outline-none"
          spellCheck="false"
          placeholder="Price"
          type="text"
        />
        <div className="flex justify-between">
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="bedrooms"
            type="Number"
          />
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="bathrooms"
            type="Number"
          />
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="Area in sqft"
            type="Number"
          />
        </div>
        <input
          className=" bg-gray-100 border md:text-xl  border-gray-300 p-4  mb-4 outline-none"
          spellCheck="false"
          placeholder="address"
          type="text"
        />
        <div className="flex justify-between">
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="lot size"
            type="Number"
          />
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="property type "
            type="text"
          />
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="days on realtor"
            type="Number"
          />
        </div>
        <div className="flex justify-between">
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="price per sqft"
            type="Number"
          />
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="year built"
            type="Number"
          />
          <input
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            spellCheck="false"
            placeholder="garages"
            type="Number"
          />
        </div>
        <textarea
          className="description bg-gray-100 md:text-xl sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
        />
        <input
          className="mt-4 title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="file"
        />

        {/* buttons */}
        {/* <div className="buttons flex md:mt-8 mt-4"> */}
        <button
          type="submit"
          className="btn border border-indigo-500 p-4 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        >
          Post
        </button>
        {/* </div> */}
      </form>
    </>
  );
}
