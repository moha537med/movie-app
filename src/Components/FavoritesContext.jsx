"use client";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add movie to favorites
  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
      toast.success(`${movie.title} added to favorites!`);
    } else {
      toast.info(`${movie.title} is already in favorites!`);
    }
  };

  // Remove movie from favorites by ID
  const removeFavorite = (id) => {
    const movie = favorites.find((fav) => fav.id === id);
    if (movie) {
      setFavorites(favorites.filter((fav) => fav.id !== id));
      toast.info(`${movie.title} removed from favorites!`);
    }
  };

  // Provide favorites state and actions (add/remove) to all child components
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
