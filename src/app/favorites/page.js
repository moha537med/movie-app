"use client";

import MovieCard from "@/Components/MovieCard";
import { useContext } from "react";
import { FavoritesContext } from "@/Components/FavoritesContext";

  export default function FavoritesPage() {

  // Extract "favorites" from FavoritesContext using useContext
  const { favorites } = useContext(FavoritesContext);

  return (
    <section className="py-8 px-5">
      <div className="container max-w-[1400px] mx-auto">

        <h2 className="text-white mb-5 text-2xl sm:text-3xl md:text-4xl font-semibold">⭐ Your Favorites</h2>

        {/* Favorites Movies Card */}
        {favorites.length === 0 ? (
          <p className="text-[#ccc] text-base sm:text-lg">
            You don’t have any favorite movies yet.
          </p>
        ) : (
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
}