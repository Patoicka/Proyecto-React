import React, { useState } from "react";
import { getImageUrl } from "../services/movieApi";
import { InfoMovie } from "./Modals/InfoMovie";

export const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = getImageUrl(movie.poster_path);

  return (
    <>
      <div 
        className="w-full max-w-sm mx-auto rounded-md mb-5 border border-gray-600 overflow-hidden cursor-pointer hover:border-gray-400 transition-colors" 
        onClick={() => setIsOpen(true)}
      >
        <img
          src={imageUrl}
          alt="portada"
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h2 className="text-neutral-50 text-xl font-bold mb-2">
            {movie.title}
          </h2>
          <p className="text-neutral-50 text-sm mb-1">{movie.release_date}</p>
          <p className="text-neutral-50 text-sm mb-1">
            ⭐ {movie.vote_average} ({movie.vote_count} votos)
          </p>
          <p className="text-neutral-50 text-sm text-justify line-clamp-3">
            {movie.overview}
          </p>
        </div>
      </div>

      <InfoMovie
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        movie={movie}
      />
    </>
  );
};
