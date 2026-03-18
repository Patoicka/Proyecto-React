import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/slices/movieSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages, activeTab } = useSelector((state) => state.movies);

  if (activeTab === "Mi lista" || totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(totalPages, 5);
    }
    
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-md font-semibold transition-colors ${
            currentPage === i
              ? "bg-green-500 text-white"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-11/12 mx-auto flex items-center justify-center gap-2 mt-8 mb-12 flex-wrap">
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="px-4 h-10 rounded-md font-semibold bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Inicio
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 h-10 rounded-md font-semibold bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Anterior
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 h-10 rounded-md font-semibold bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Siguiente
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 h-10 rounded-md font-semibold bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Fin
      </button>
    </div>
  );
};
