import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { getPopularMovies } from "../services/movieApi";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleGetMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error al cargar películas:", error);
        setMovies([]);
      }
    };

    handleGetMovies();
  }, []);

  const mapMovies = (movies) => {
    if (!movies || movies.length === 0) {
      return <p className="text-neutral-400">No hay películas disponibles</p>;
    }
    return movies.map((movie) => {
        return (
            <MovieCard key={movie.id} movie={movie} />
        );
    });
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 pb-8">
      {mapMovies(movies)}
    </div>
  );
};
