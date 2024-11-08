"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function RegisterForm() {
  const { registerUser, userState, handlerUserInput } = useUserContext();
  const { name, email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/mov2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

      {/* Registration Form */}
      <form className="auth-form relative m-[2rem] px-10 py-14 rounded-lg  backdrop-blur-lg w-full max-w-[520px] text-white border-white-100">
        <div className="relative z-10">
          <h1 className="mb-2 text-center text-[1.35rem] font-medium">
            Register for an Account
          </h1>
          <p className="mb-8 px-[2rem] text-center text-[#999] text-[14px]">
            Create an account. Already have an account?{" "}
            <a
              href="/login"
              className="font-bold text-[#2ECC71] hover:text-[#7263F3] transition-all duration-300"
            >
              Login here
            </a>
          </p>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-[#999]">
              <span className="px-2 py-1 bg-black text-white font-semibold rounded">Full Name</span>
              
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handlerUserInput("name")(e)}
              name="name"
              className="px-4 py-3 border-[1px] rounded-md  bg-black text-[#999] "
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="email" className="mb-1 text-[#999]">
              <span className="px-2 py-1 bg-black text-white font-semibold rounded">Email</span>
              
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => handlerUserInput("email")(e)}
              name="email"
              className="px-4 py-3 border-[1px] rounded-md  bg-black text-[#999]"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="relative mt-[1rem] flex flex-col">
            <label htmlFor="password" className="mb-1 text-[#999]">
              <span className="px-2 py-1 bg-black text-white font-semibold rounded">Password</span>
              
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => handlerUserInput("password")(e)}
              name="password"
              className="px-4 py-3 border-[1px] rounded-md  bg-black text-[#999]"
              placeholder="***************"
            />
            <button
              type="button"
              className="absolute p-1 right-4 top-[43%] text-[22px] text-[#999] opacity-45"
            >
              {showPassword ? (
                <i className="fas fa-eye-slash" onClick={togglePassword}></i>
              ) : (
                <i className="fas fa-eye" onClick={togglePassword}></i>
              )}
            </button>
          </div>

          <div className="flex">
            <button
              type="submit"
              disabled={!name || !email || !password}
              onClick={registerUser}
              className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#2ECC71] hover:text-black  hover:bg-[#7263F3] text-white rounded-md hover:bg-[#1abc9c] transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
