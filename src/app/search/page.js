"use client"; 

import { useState } from "react";
import MovieCard from "@/Components/MovieCard"; 

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY; 

  async function handleSearch(e, newPage = 1) {
    if (e) e.preventDefault();
    if (!query.trim()) {
      setMovies([]);
      setPage(1);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${newPage}&include_adult=true`
      );
      if (!res.ok) throw new Error("Failed to fetch movies");

      const data = await res.json();

      if (data.results.length === 0 && newPage === 1) {
        setError("This Movie Is Not Found");
        setMovies([]);
      } else {
        setMovies((prev) =>
          newPage === 1 ? data.results : [...prev, ...data.results]
        );
        setPage(newPage);
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function loadMore() {
    handleSearch(null, page + 1);
  }

  return (
    <section className="py-10 px-5 text-white">
      <div className="container max-w-[1400px] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">
          Search Movies
        </h1>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="mb-5 w-full max-w-md flex flex-col sm:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Enter movie name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 p-3 text-base rounded-md border border-[#555] bg-[#111] text-white outline-none"
          />
          <button
            type="submit"
            className="py-3 px-5 bg-[#e50914] text-white rounded-md cursor-pointer hover:bg-[#b20710] transition"
          >
            Search
          </button>
        </form>

        {/* Loading / Error */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-[tomato]">{error}</p>}

        {/* Movies Grid */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Load More Button */}
        {movies.length > 0 && !loading && (
          <div className="text-center mt-5">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-[#e50914] text-white rounded-md hover:bg-[#b20710] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
