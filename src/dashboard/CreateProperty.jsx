import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateProperty() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data,'ye hi h bro');

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    for (let key in data) {
      if (key === 'file') {
        for (let i = 0; i < data[key].length; i++) {
          formData.append('images', data[key][i]);
        }
      } else {
        formData.append(key, data[key]);
      }
    }

    // try {
    //   const response = await fetch('/api/properties/create-property', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   const result = await response.json();
    //   console.log(result);

    //   if (response.ok) {
    //     navigate('/properties');
    //   }
    // } catch (error) {
    //   console.error('Error uploading property:', error);
    // }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="editor mx-auto w-10/12 mt-44 flex flex-col text-gray-800 border p-4 shadow-lg max-w-5xl"
      >
        <h1 className="heading text-center font-bold text-3xl m-5 pb-6 text-black">
          Create New Property Listing
        </h1>

        <input
          {...register("price", { required: true })}
          className="bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
          placeholder="Price"
          type="number"
          required
        />

        <div className="flex justify-between">
          <input
            {...register("bedrooms", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Bedrooms"
            type="number"
            required
          />

          <input
            {...register("bathrooms", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Bathrooms"
            type="number"
            required
          />

          <input
            {...register("area", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Area in sqft"
            type="number"
            required
          />
        </div>

        <input
          {...register("address", { required: true })}
          className="bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
          placeholder="Address"
          type="text"
          required
        />

        <div className="flex justify-between">
          <input
            {...register("lotSize", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Lot size"
            type="number"
            required
          />

          <input
            {...register("propertyType", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Property type"
            type="text"
            required
          />

          <input
            {...register("daysOnRealtor", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Days on realtor"
            type="number"
            required
          />
        </div>

        <div className="flex justify-between">
          <input
            {...register("pricePerSqft", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Price per sqft"
            type="number"
            required
          />

          <input
            {...register("yearBuilt", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Year built"
            type="number"
            required
          />

          <input
            {...register("garage", { required: true })}
            className="title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
            placeholder="Garages"
            type="number"
            required
          />
        </div>

        <textarea
          {...register("description", { required: true })}
          className="description bg-gray-100 md:text-xl sec p-3 h-60 border border-gray-300 outline-none"
          placeholder="Describe everything about this post here"
          required
        />

        <input
          {...register("file", { required: true })}
          className="mt-4 title bg-gray-100 border md:text-xl border-gray-300 p-4 mb-4 outline-none"
          type="file"
          multiple
          required
        />

        <button
          type="submit"
          className="btn border border-indigo-500 md:text-xl p-4 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        >
          Create 
        </button>
      </form>
    </>
  );
}
