import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const InfoMovie = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return null;

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
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-neutral-800 hover:bg-neutral-700 rounded-full p-2 transition-colors"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
            </button>

            {/* Contenido del modal */}
            <div className="flex flex-col md:flex-row">
              {/* Imagen del poster */}
              <div className="w-full md:w-2/5 shrink-0">
                {/* Aquí va la imagen del poster */}
              </div>

              {/* Información de la película */}
              <div className="w-full md:w-3/5 p-6 md:p-8">
                {/* Aquí va el contenido de la película */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
