import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { Loader } from "./Loader";
import { Pagination } from "./Pagination";
import { fetchMoviesThunk } from "../store/thunks/movieThunks";
import { setLoginOpen } from "../store/slices/authSlice";

export const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, myList, activeTab, searchQuery, isLoading, currentPage } = useSelector((state) => state.movies);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(fetchMoviesThunk());
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [activeTab, searchQuery, currentPage, dispatch]);

  const mapMovies = () => {
    const currentMovies = activeTab === "Mi lista" ? myList : movies;

    if (isLoading && activeTab !== "Mi lista") {
      return (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 flex justify-center">
          <Loader />
        </div>
      );
    }

    if (activeTab === "Mi lista" && !isLoggedIn) {
      return (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 flex flex-col items-center justify-center p-12 mt-10 h-64 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl text-center">
          <p className="text-neutral-50 text-2xl font-semibold mb-2">Accede a tu cuenta</p>
          <p className="text-neutral-400 mb-6">Inicia sesión para poder guardar y ver tus películas favoritas.</p>
          <button 
            onClick={() => dispatch(setLoginOpen(true))}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-md transition-all shadow-lg hover:shadow-green-500/20"
          >
            Iniciar Sesión
          </button>
        </div>
      );
    }
    
    if (!currentMovies || currentMovies.length === 0) {
      if (searchQuery && activeTab !== "Mi lista") {
        return <p className="text-neutral-400 mt-10">No se encontraron películas para "{searchQuery}"</p>;
      }
      if (activeTab === "Mi lista") {
        return <p className="text-neutral-400 mt-10">Aún no has añadido películas a tu lista.</p>;
      }
      return <p className="text-neutral-400 mt-10">No hay películas disponibles</p>;
    }
    return currentMovies.map((movie) => {
      return (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
        />
      );
    });
  };

  return (
    <>
      <div className="w-11/12 mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-8 mt-4">
        {mapMovies()}
      </div>
      <Pagination />
    </>
  );
};
