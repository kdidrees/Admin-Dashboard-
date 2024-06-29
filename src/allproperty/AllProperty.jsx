import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TbRulerMeasure } from "react-icons/tb";
import { FaHammer } from "react-icons/fa";
import { useEffect } from "react";
import { fetchAllProperties } from "../redux/slices/propertySlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function AllProperty() {
  const dispatch = useDispatch();
  const { properties, loading } = useSelector((state) => state.property);

  const myimages = properties.map((data) =>
    data.images[0].split("public\\Images\\").join("")
  );
  console.log(myimages);

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="lg:mx-16 mt-48">
        {properties?.map((property) => {
          return (
            <>
              <div key={property._id}>
                <Link to={`/edit-property/${property._id}`}>
                  <div className="bg-white shadow-lg rounded p-4 mb-4 flex justify-between lg:flex-row flex-col cursor-pointer">
                    <div className="flex-shrink-0">
                      <img
                        src={`http://192.168.1.77:4000/Images/${property.images[0]
                          .split("public\\Images\\")
                          .join("")}`}
                        alt="Map 1"
                        width={500}
                        className="h-full  object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 mx-auto px-8 flex flex-col justify-between">
                      <div className="flex  mb-2 flex-col">
                        <h2 className="lg:text-2xl text-xl lg:mt-4 mt-6 font-semibold font-roboto">
                          {property.address}
                        </h2>

                        <div className="flex">
                          <span className="mt-3">
                            <CiLocationOn style={{ fontSize: "1.7rem" }} />
                          </span>
                          <p className="lg:ml-2 ml-0 font-sans lg:text-base text-xs mt-3 text-gray-500">
                            {" "}
                            Richmond Place 1312, Charlotte, New York
                          </p>
                        </div>
                      </div>
                      <div className="flex  mb-2 flex-col">
                        <h2 className="lg:text-2xl text-xl font-semibold font-roboto">
                          ${property.price}
                        </h2>

                        <div className="">
                          <div className="lg:ml-2 ml-0 font-sans lg:text-xl text-base mt-3 text-gray-500 flex">
                            <div className="">
                              <p className="lg:text-xl text-base text-black font-bold font-sans">
                                {property.bedrooms}{" "}
                                <span className="font-normal">bed</span>
                              </p>
                            </div>
                            <div className="mx-4">
                              <p className="lg:text-xl text-base text-black font-bold font-sans">
                                {property.bathrooms}{" "}
                                <span className="font-normal">bath</span>
                              </p>
                            </div>
                            <div className="mx-4">
                              <p className="lg:text-xl text-base text-black font-bold font-sans">
                                {property.area}{" "}
                                <span className="font-normal">sqft</span>
                              </p>
                            </div>
                            <div className="mx-4">
                              <p className="lg:text-xl text-base text-black font-bold font-sans">
                                {property.lotSize}{" "}
                                <span className="font-normal">acre lot</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between  flex-col">
                        <div className="mt-2 flex flex-row">
                          <div className="flex items-center gap-4 ">
                            <FaHouseChimneyWindow
                              style={{ fontSize: "2.2rem" }}
                            />
                            <div>
                              <p className="block antialiased font-sans lg:text-xl  text-base  leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                {property.propertyType}
                              </p>
                              <p className="lg:block hidden antialiased font-sans lg:text-base text-xs  text-gray-500 font-normal">
                                property type
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mx-8">
                            <SlCalender style={{ fontSize: "2.2rem" }} />
                            <div>
                              <p className="block antialiased font-sans  lg:text-2xl  text-xl   leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                {property.daysOnRealtor} days
                              </p>
                              <p className="lg:block hidden antialiased font-sans lg:text-base text-xs leading-normal text-gray-700 font-normal">
                                Time on Realtor.com
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mx-8">
                            <TbRulerMeasure style={{ fontSize: "2.2rem" }} />
                            <div>
                              <p className="block antialiased font-sans  lg:text-2xl  text-xl   leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                ${property.pricePerSqft}
                              </p>
                              <p className="lg:block hidden antialiased font-sans lg:text-base text-xs leading-normal text-gray-700 font-normal">
                                price per sqft
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between  flex-col">
                        <div className="mt-2 flex flex-row">
                          <div className="flex items-center gap-4 ">
                            <FaHammer style={{ fontSize: "2.2rem" }} />
                            <div>
                              <p className="block antialiased font-sans lg:text-2xl  text-xl  leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                                {property.yearBuilt}
                              </p>
                              <p className="lg:block hidden antialiased font-sans lg:text-base text-xs  text-gray-500 font-normal">
                                Year Built
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
