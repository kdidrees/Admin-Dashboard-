import React from "react";
import { FaApple } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="form-container w-[400px] 2xl:w-[700px]  bg-white shadow-lg rounded-lg p-12  mt-2 mb-2">
        <p className="title text-center text-3xl 2xl:text-5xl font-bold mb-8 2xl:mb-14 text-gray-800 2xl:mt-5">
          Sign In to your account
        </p>
        <form className="form w-full flex flex-col gap-6 mb-6 2xl:mb-10">
          <input
            type="email"
            className="input rounded-lg border border-gray-300 px-4 py-3 2xl:px-8 2xl:py-6 2xl:text-2xl focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="Email"
          />
          <input
            type="password"
            className="input rounded-lg border border-gray-300 px-4 py-3 2xl:px-8 2xl:py-6 2xl:text-2xl focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="Password"
          />
          <p className="page-link text-right text-gray-700 ">
            {/* <span className="page-link-label cursor-pointer text-xs 2xl:text-xl font-bold hover:text-blue-500">
              Forgot Password?
            </span> */}
          </p>
          <button className="form-btn bg-[#5128A7] text-white font-semibold rounded-lg px-6 py-3 2xl:px-8 2xl:py-5 2xl:text-2xl shadow-md">
            Log in
          </button>
        </form>
   
      </div>
    </div>
  );
};
export default LoginForm;
