"use client";
import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";

function ForgotPasswordForm() {
  const { forgotPasswordEmail } = useUserContext();

  // State
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    forgotPasswordEmail(email);

    // Clear input
    setEmail("");
  };

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

      {/* Forgot Password Form with Blur Effect */}
      <form className="forgot-password-form relative m-[2rem] px-10 py-14 rounded-lg bg-black backdrop-blur-lg w-full max-w-[520px] text-white justify-center items-center ml-44">
        <div className="relative z-10">
          <h1 className="mb-2 text-center text-[1.35rem] font-medium">
            Enter Email to Reset Password
          </h1>
          <div className="mt-[1rem] flex flex-col">
            <label htmlFor="email" className="mb-1">
              <span className="px-2 py-1 bg-black text-[#999] rounded">
                Email
              </span>
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder="johndoe@gmail.com"
              className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#2ECC71] text-white rounded-md hover:bg-[#1abc9c] transition-colors"
            >
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
