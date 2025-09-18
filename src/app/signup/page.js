"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGooglePlusG, FaLinkedin } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!email.includes("@")) {
      toast.error("❌ Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      toast.error("❌ Password must be at least 6 characters");
      return;
    }
    if (confirmPassword !== password) {
      toast.error("❌ Passwords don’t match");
      return;
    }

    // success
    toast.success("✅ Account created successfully!");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
    {/* Toast */}
    <ToastContainer position="top-center" autoClose={3000} theme="colored" />

    {/* container */}
    <div className="max-w-[1100px] grid grid-cols-1 h-auto mx-auto mt-8 sm:h-[200px] md:grid-cols-2 md:mt-5 md:h-[400px] lg:mt-0 lg:h-[550px] p-4 sm:p-6 md:p-8">
      {/* Description */}
      <div className="bg-[rgb(0,120,240)] text-white p-6 sm:p-8 flex flex-col gap-4 items-center justify-center">
        <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-center">
          Come Join Us
        </h2>
        <p className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light leading-relaxed">
          We are so excited to have you here. If you haven’t already, create an
          account to get access to exclusive offers, rewards, and discounts.
        </p>
        <p className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white font-semibold transition duration-300 hover:text-black hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-6 sm:p-8 bg-white flex flex-col gap-5 sm:gap-6 shadow-md"
      >
        <h2 className="text-center text-[24px] sm:text-[30px] md:text-[35px] font-bold">
          Sign Up
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          required
          className="w-full bg-gray-200 rounded-lg px-3 py-2 sm:py-3 outline-none"
        />

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

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          required
          className="w-full bg-gray-200 rounded-lg px-3 py-2 sm:py-3 outline-none"
        />

        {confirmPassword !== password && confirmPassword.length > 0 && (
          <span className="text-red-600 text-sm">Passwords don’t match</span>
        )}

        <button className="bg-sky-500 text-white p-3 sm:p-4 text-base sm:text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-sky-700 hover:uppercase">
          Sign Up
        </button>

        <span className="self-center text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
          or Log in with
        </span>

        {/* social accounts */}
        <div className="flex justify-center text-[18px] sm:text-[20px] md:text-[22px] font-semibold gap-4">
          <FaFacebook className="text-sky-600 cursor-pointer hover:scale-110 transition" />
          <FaGooglePlusG className="text-red-500 cursor-pointer hover:scale-110 transition" />
          <FaLinkedin className="text-sky-500 cursor-pointer hover:scale-110 transition" />
        </div>

      </form>
    </div>
    </>
  );
}

export default SignUp;
