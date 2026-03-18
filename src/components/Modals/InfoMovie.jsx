import { faTimes, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../services/movieApi";
import { addToMyList } from "../../store/slices/movieSlice";
import { setLoginOpen } from "../../store/slices/authSlice";

export const InfoMovie = ({ isOpen, onClose, movie }) => {
  const dispatch = useDispatch();
  const { myList } = useSelector((state) => state.movies);
  const { isLoggedIn } = useSelector((state) => state.auth);
  
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen || !movie) return null;

  const isAdded = myList.some((m) => m.id === movie.id);

  const handleAddToList = () => {
    if (!isLoggedIn) {
      dispatch(setLoginOpen(true));
    } else {
      setIsAdding(true);
      setTimeout(() => {
        setIsAdding(false);
        dispatch(addToMyList(movie));
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // Ocultar mensaje después de 3s
      }, 1500);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <div className="bg-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-neutral-800 hover:bg-neutral-700 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
            </button>


            {/* Contenido (Poster e Info) */}
            <div className="flex flex-col md:flex-row w-full p-6 pt-16 md:p-8 gap-6 md:gap-8 mt-2 md:mt-4">
              {/* Imagen del poster */}
              <div className="w-full md:w-2/5 shrink-0 flex justify-center items-start">
                <img
                  className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-sm border border-neutral-700"
                  src={getImageUrl(movie.poster_path, "w500")}
                  alt={movie.title}
                />
              </div>

              {/* Información de la película */}
              <div className="w-full md:w-3/5 flex flex-col text-neutral-50 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {movie.title}
                </h1>

                <div className="flex items-center gap-4 text-sm md:text-base text-neutral-400 mb-6 border-b border-neutral-700 pb-4">
                  {movie.release_date && (
                    <span className="font-medium bg-neutral-800 px-3 py-1 rounded-md">
                      {new Date(movie.release_date).getFullYear()}
                    </span>
                  )}
                  {movie.vote_average > 0 && (
                    <span className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-md font-bold border border-green-500/30">
                      ★ {movie.vote_average.toFixed(1)}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold mb-3 text-neutral-200">Sinopsis</h2>
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg mb-6">
                  {movie.overview ? movie.overview : "No hay una sinopsis disponible para esta película."}
                </p>

                {!isAdded && (
                  <button
                    onClick={handleAddToList}
                    disabled={isAdding}
                    className="mt-auto self-start px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 border bg-neutral-800 hover:bg-neutral-700 text-neutral-50 border-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAdding ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Guardando...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPlus} /> Añadir a Mi Lista
                      </>
                    )}
                  </button>
                )}

                {showSuccess && (
                  <p className="mt-4 text-green-400 font-semibold animate-pulse">
                    ¡Película añadida a tu lista correctamente!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
