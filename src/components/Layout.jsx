import React from "react";
import { Search } from "./Search";
import perfil from "../assets/perfil.JPEG";
import { MovieList } from "./MovieList";

export const Layout = () => {
  return (
    <div className="flex-1 bg-neutral-900 w-full h-screen">
      <div className="bg-neutral-700 h-full w-1/6 hidden sm:block">
      </div>
      <div className="bg-neutral-900 h-full w-full sm:w-5/6 flex flex-col items-center relative overflow-y-auto">
        <img 
          src={perfil} 
          alt="perfil" 
          className="absolute right-3 top-3 w-12 h-12 rounded-full bg-amber-50 object-cover z-10" 
        />
        <div className="w-full px-4 pt-20">
          <Search 
            text="text" 
            placeholder="Buscar pelicula..." 
            onChange={(e) => console.log(e.target.value)} 
          />
          <MovieList />
        </div>
      </div>
    </div>
  );
};
