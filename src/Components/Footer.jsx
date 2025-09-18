import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    
  <footer className="bg-[#0a0a0a] text-white py-10 px-5 border-t border-[#222] mt-20">
    <div className="container max-w-[1250px] mx-auto flex flex-col md:flex-row justify-between flex-wrap gap-8">

      {/* About / Links */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-[#e50914] mb-3 text-lg sm:text-xl md:text-2xl font-semibold">MoviesNest</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          Explore top movies, latest releases, and all-time favorites. Discover new films every day!
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex-1 min-w-[150px]">
        <h4 className="mb-3 text-base sm:text-lg font-semibold">Quick Links</h4>
        <ul className="list-none p-0 text-sm sm:text-base space-y-2">
          <li>
            <Link href="/" className="text-[#ccc] no-underline hover:text-white transition">Home</Link>
          </li>
          <li>
            <Link href="/search" className="text-[#ccc] no-underline hover:text-white transition">Movies</Link>
          </li>
          <li>
            <Link href="/favorites" className="text-[#ccc] no-underline hover:text-white transition">Favorites</Link>
          </li>
        </ul>
      </div>

      {/* Social */}
      <div className="flex-1 min-w-[150px]">
        <h4 className="mb-3 text-base sm:text-lg font-semibold">Follow Us</h4>
        <div className="flex gap-4 text-xl sm:text-2xl">
          <a href="#" className="text-[#3b5998] hover:opacity-80 transition"><FaFacebookF /></a>
          <a href="#" className="text-[#00acee] hover:opacity-80 transition"><FaTwitter /></a>
          <a href="#" className="text-[#C13584] hover:opacity-80 transition"><FaInstagram /></a>
        </div>
      </div>

    </div>
    
    <div className="text-center mt-8 text-xs sm:text-sm text-[#777]">
      &copy; {new Date().getFullYear()} Movie Explorer. All rights reserved.
    </div>
  </footer>
  );
}

export default Footer;
