import React from 'react';

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-64 mt-10">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-green-400 font-semibold text-lg animate-pulse">Cargando...</p>
    </div>
  );
};
