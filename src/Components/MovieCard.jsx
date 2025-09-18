"use client";

import { toast } from "react-toastify";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { FavoritesContext } from "@/Components/FavoritesContext";


export default function MovieCard({ movie }) {

  const { id, title, release_date, vote_average, poster_path } = movie || {};

  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    :  "/no-image.webp";

  // Extract "favorites ,addFavorite , removeFavorite " from FavoritesContext using useContext
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const alreadyExists = favorites?.some((fav) => fav.id === id);

  const handleAddFavorite = () => {
    if (!alreadyExists) {
      addFavorite(movie);
      toast.success(`${title} added to favorites!`);
    } else {
      toast.info("This movie is already in your favorites.");
    }
  };

  const handleRemoveFavorite = () => {
    removeFavorite(id);
    toast.info(`${title} removed from favorites.`);
  };

  return (
    <div
      className="bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] 
                border border-[#e5091450] rounded-2xl overflow-hidden 
                text-center p-3 sm:p-4 md:p-5 lg:p-6 
                text-white cursor-pointer transition-transform duration-300 
                hover:scale-105"
    >
    <Link href={`/movie/${id}`}>
        <Image
          src={posterSrc}
          alt={title}
          width={300}      
          height={450}     
          className="w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[250px] rounded-lg object-cover cursor-pointer"
          priority={false} 
          
        />
    </Link>

      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold my-2">
        {title}
      </h3>

      <div className="flex items-center justify-evenly my-3 text-sm sm:text-base md:text-lg">
        <p>📅 {release_date ? release_date.slice(0, 4) : "—"}</p>
        <span>⭐ {vote_average}</span>
      </div>

      {alreadyExists ? (
        <Button
          type="button"
          text="Remove Favorite"
          backgroundColor="#444"
          color="#fff"
          onClick={handleRemoveFavorite}
          className="mt-3 text-sm sm:text-base"
          loading="lazy"
        />
      ) : (
        <Button
          type="button"
          text="Add Favorite"
          backgroundColor="#e50914"
          color="#fff"
          onClick={handleAddFavorite}
          className="mt-3 text-sm sm:text-base"
        />
      )}
    </div>
  );
}