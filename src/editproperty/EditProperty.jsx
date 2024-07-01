import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProperty,
  fetchAllProperties,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
} from "../redux/slices/propertySlice";
import { useRef } from "react";

export default function EditProperty() {
  const [formValues, setFormValues] = useState({});
  const { id } = useParams();

  const { property, loading, error } = useSelector((state) => state.property);

  // console.log(data);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertyById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (property) {
      setFormValues(property);

      // Set form field values using setValue
      for (const key in property) {
        if (property.hasOwnProperty(key)) {
          setValue(key, property[key]);
        }
      }
    }
  }, [property, setValue]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    setFormValues((prevValues) => ({
      ...prevValues,
      images: files,
    }));
  };

  const onSubmit = (data) => {
    const updatedData = {
      price: data.price,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      area: data.area,
      address: data.address,
      lotSize: data.lotSize,
      propertyType: data.propertyType,
      daysOnRealtor: data.daysOnRealtor,
      pricePerSqft: data.pricePerSqft,
      yearBuilt: data.yearBuilt,
      garage: data.garage,
      description: data.description,
      images: formValues.images,
    };

    console.log(updatedData, "kd data here");

    dispatch(updatePropertyById({ id, updatedData }))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          console.log("updated successfully");
          dispatch(fetchAllProperties()); // Fetch updated property list
          navigate("/all-properties"); // Redirect after successful update and fetching updated list
        }
      })
      .catch((error) => {
        console.error("Error updating property:", error);
        // Handle errors, possibly show an error message to the user
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deletePropertyById(id))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/all-properties");
        }
      })
      .catch((err) => console.log(err, "there is error deleting the property"));
  };

  console.log(property?.propertyType, "kd property here");

  // handle loading
  if (loading) {
    return <p>Loading....</p>;
  }

  // handle error

  if (error) {
    return <p>error fetching property : {error.error}</p>;
  }

  if (!property) {
    return <p>No property found with ID : {id}</p>;
  }

  return (
    <>
      <section className="py-1 bg-blueGray-50 mt-24">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Update Property Details
                </h6>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Delete Property
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Property Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        {...register("price", {
                          required: "Price is required",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "Invalid price format",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Price"
                      />
                      {errors.price && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.price.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="bedrooms"
                      >
                        Bedrooms
                      </label>
                      <input
                        type="text"
                        {...register("bedrooms", {
                          required: "bedrooms is a requried field",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Bedrooms"
                      />
                      {errors.bedrooms && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.bedrooms.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="bathrooms"
                      >
                        Bathrooms
                      </label>
                      <input
                        type="text"
                        {...register("bathrooms", {
                          required: "bathrooms is a required field",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Bathrooms"
                      />
                      {errors.bathrooms && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.bathrooms.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="area"
                      >
                        Area in sqft
                      </label>
                      <input
                        type="text"
                        {...register("area", {
                          required: "area is a required",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Area in sqft"
                      />
                      {errors.area && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.area.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        {...register("address", {
                          required: "address is required",
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Address"
                      />
                      {errors.address && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.address.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="lotSize"
                      >
                        Lot Size
                      </label>
                      <input
                        type="text"
                        {...register("lotSize", {
                          required: "lot size is required",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Lot size"
                      />
                      {errors.lotSize && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.lotSize.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="propertyType"
                      >
                        Property Type
                      </label>
                      <select
                        {...register("propertyType", {
                          required: "Property type is required",
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={formValues.propertyType || ""}
                        onChange={(e) =>
                          setValue("propertyType", e.target.value)
                        }
                      >
                        <option value="" disabled hidden>
                          Select Property Type
                        </option>
                        <option value="house">House</option>
                        <option value="mobile">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhome">TownHome</option>
                        <option value="land">Land</option>
                        <option value="multi-family">Multi Family</option>
                        <option value="farm">Farm</option>
                      </select>
                      {errors.propertyType && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.propertyType.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="daysOnRealtor"
                      >
                        Days on realtor
                      </label>
                      <input
                        type="text"
                        {...register("daysOnRealtor", {
                          required: "this field is required",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Days on realtor"
                      />
                      {errors.daysOnRealtor && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.daysOnRealtor.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="pricePerSqft"
                      >
                        Price per sqft
                      </label>
                      <input
                        type="text"
                        {...register("pricePerSqft", {
                          required: "this field is required",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Price per sqft"
                      />
                      {errors.pricePerSqft && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.pricePerSqft.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="yearBuilt"
                      >
                        Year Built
                      </label>
                      <input
                        type="text"
                        {...register("yearBuilt", {
                          required: "year is required",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Year Built"
                      />
                      {errors.yearBuilt && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.yearBuilt.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="hoaFees"
                      >
                        garages
                      </label>
                      <input
                        type="text"
                        {...register("garage", {
                          required: "this is a required field",
                          pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "only number acceptable",
                          },
                        })}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      {errors.garage && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.garage.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Images
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="file"
                      >
                        Property Images
                      </label>
                      <input
                        type="file"
                        {...register("file")}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Images"
                        multiple
                        onChange={handleFileChange}
                      />
                      {errors.file && (
                        <span className="text-red-500 md:text-base mt-3">
                          {errors.file.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div> */}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
