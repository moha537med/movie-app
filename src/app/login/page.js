"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaGooglePlusG, FaLinkedin } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // check empty fields
    if (!email || !password) {
      toast.error("❌ All fields are required");
      return;
    }

    // validation
    if (!email.includes("@")) {
      toast.error("❌ Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      toast.error("❌ Password must be at least 6 characters");
      return;
    }

    // success
    toast.success("✅ Login successful!");
    setEmail("");
    setPassword("");
  }

  return (
    <>
    {/* Toast Container */}
    <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    <div className="max-w-[1100px] grid grid-cols-1 h-auto mx-auto mt-1 sm:mt-2  md:grid-cols-2 md:mt-3 lg:mt-0 lg:h-[550px] p-4 sm:p-6 md:p-8">
    
      {/* Description */}
      <div className="bg-green-600 text-white p-6 sm:p-8 flex flex-col gap-4 items-center justify-center order-2 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Welcome Back
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl font-normal leading-relaxed">
          Welcome back! We are so happy to have you here. It`s great to see you
          again.
        </p>
        <p className="text-center text-base sm:text-lg md:text-xl">
          No account yet?{" "}
          <Link
            href="/signup"
            className="text-white font-semibold transition duration-300 hover:text-black hover:underline hover:text-lg sm:hover:text-xl"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="order-1 p-6 sm:p-8 bg-white text-black flex flex-col justify-center gap-6 shadow-md"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Log In
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full bg-gray-200 rounded-lg px-3 py-2 sm:py-3 outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full bg-gray-200 rounded-lg px-3 py-2 sm:py-3 outline-none"
        />

        <button className="bg-[#080] text-white p-3 sm:p-4 text-base sm:text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-sky-700 hover:uppercase">
          Log In
        </button>

        <span className="self-center text-sm sm:text-base md:text-lg font-semibold">
          or Sign up with
        </span>

        {/* social */}
        <div className="flex justify-center text-base sm:text-lg md:text-xl gap-3">
          <FaFacebook className="text-sky-600 cursor-pointer hover:scale-110 transition" />
          <FaGooglePlusG className="text-red-500 cursor-pointer hover:scale-110 transition" />
          <FaLinkedin className="text-sky-500 cursor-pointer hover:scale-110 transition" />
        </div>
      </form>

      
    </div>
    
    </>
  );
}
