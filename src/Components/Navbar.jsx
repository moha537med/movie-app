"use client"; 

import { useState } from "react";
import Link from "next/link";
import { FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { FaClapperboard } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-[1250px] mx-auto flex items-center justify-between  h-[100px] relative px-4 md:gap-5 lg:px-8 xl:px-0 ">
      {/* Logo */}
      <div className="logo">
        <Link
          href="/"
          className="text-[#e50914] text-[25px] md:text-[30px] lg:text-[35px] font-bold tracking-[3px] flex items-center"
        >
          Movies <span className="text-white text-[25px] md:text-[30px] lg:text-[35px]">Nest</span>
          <FaClapperboard className="inline-block ml-[3px] align-middle text-white" />
        </Link>
      </div>

      {/* Desktop/Tablet Nav */}
      <nav className="hidden  md:flex md:gap-8">
        <ul className="flex items-center gap-8 lg:gap-10">
          <li>
            <Link
              href="/"
              className="text-white text-base font-semibold hover:underline hover:text-[18px] hover:uppercase hover:tracking-[2px] hover:font-bold hover:text-blue-500 transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/search"
              className="text-white text-base font-semibold hover:underline hover:text-[18px] hover:uppercase hover:tracking-[2px] hover:font-bold hover:text-blue-500 transition-all duration-300 flex items-center gap-1"
            >
              Search <FaSearch className="inline-block ml-[3px] align-middle" />
            </Link>
          </li>

          <li>
            <Link
              href="/favorites"
              className="text-white text-base font-semibold hover:underline hover:text-[18px] hover:uppercase hover:tracking-[2px] hover:font-bold hover:text-blue-500 transition-all duration-300 flex items-center gap-1"
            >
              Favorites <FaHeart className="inline-block ml-[3px] align-middle" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop/Tablet Account */}
      <div className="hidden md:flex items-center gap-5">
        <Link
          href="/login"
          className="text-white text-base font-semibold hover:bg-[#e50914] hover:px-[15px] hover:py-[10px] hover:rounded-[10px] transition-all duration-300 flex items-center gap-1"
        >
          Log In <IoIosLogIn className="inline-block ml-[3px] align-middle" />
        </Link>

        <Link
          href="/signup"
          className="text-white text-base font-normal bg-[#23a6f0] px-[15px] py-[10px] rounded-[10px] ml-5 hover:bg-[#e50914] transition-all duration-300 flex items-center gap-1"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl cursor-pointer z-60"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" fixed top-0 left-0 h-screen w-full bg-black flex flex-col items-center gap-6 py-10 z-50 md:hidden ">
          <Link href="/" className="text-white text-lg font-semibold hover:text-sky-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/search" className="text-white text-lg font-semibold hover:text-sky-600 flex items-center gap-1" onClick={() => setIsOpen(false)}>
            Search <FaSearch />
          </Link>
          <Link href="/favorites" className="text-white text-lg font-semibold hover:text-sky-600 flex items-center gap-1" onClick={() => setIsOpen(false)}>
            Favorites <FaHeart />
          </Link>
          <Link href="/login" className="text-white text-lg font-semibold px-5 py-2 rounded hover:bg-[#e50914] transition-all duration-300 flex items-center gap-1" onClick={() => setIsOpen(false)}>
            Log In <IoIosLogIn className="inline-block ml-1 align-middle" />
          </Link>
          <Link
            href="/signup"
            className="text-white text-lg font-normal bg-[#23a6f0] px-5 py-2 rounded-[10px] hover:bg-[#e50914] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
      </div>
      )}
    </header>
  );
}
