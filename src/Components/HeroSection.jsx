import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
  <section id="hero-home" className="py-20 mb-20 text-white px-5">
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-5">

      {/* Content */}
      <div className="flex flex-col justify-center gap-8 md:w-[45%]">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Discover the Best <span className="text-red-600 font-semibold">Movies</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#d1d1d1] leading-relaxed">
          Explore thousands of movies from action-packed blockbusters to timeless
          classics. Stay updated with the latest trends and reviews.
        </p>

        <Link href="/search" className="self-start text-base sm:text-lg px-6 sm:px-7 py-2 sm:py-3 rounded-lg bg-[#e50914] text-white hover:bg-[#b20710] hover:scale-105 transition">
          Explore Now
        </Link>
      </div>

      {/* Poster */}
      <div className="relative flex justify-center md:w-[45%] mt-10 md:mt-0">

        <span className="bg-[#f00] text-white absolute top-2 left-2 py-2.5 px-5 rounded-lg font-bold z-10">New</span>

        <Link href={`/movie/299534`} className="w-full">
          <Image
            src="https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
            alt="Movie Poster"
            width={500}
            height={750}
            className="w-full max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-cover rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
            priority
          />
        </Link>
      </div>

    </div>
  </section>
  );
}
