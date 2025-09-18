"use client";

import MovieCard from "@/Components/MovieCard";
import { useEffect, useState } from "react";

export default  function RecommendedMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API Key
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPopular() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch popular movies");
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        if (err.name !== "AbortError")
        {
          setError(err.message);
        }else {
          console.log("Aborting Error")
        }

      } finally {
        setLoading(false);
      }
    }

    fetchPopular();

    return () => controller.abort();
  }, [API_KEY]);

  // show the first eight movies
  const sliceEight = movies.slice(0, 8);

  // states
  if (loading) return <p className="text-white">Loading popular movies...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section id="recommended-movies" className="py-8 px-5 my-20">
      <div className="container max-w-[1400px] mx-auto">

        <h2 className="text-3xl text-[#e50914] md:text-4xl font-bold mb-10 lg:text-white">
          Recommended Movies
        </h2>

        {/* Movies Cards */}
        {movies.length === 0 ? (
          <p className="text-[#ccc]">No recommended movies found.</p>
        ) : (
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sliceEight.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
