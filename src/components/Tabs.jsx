
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/slices/movieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.movies.activeTab);
  const [isOpen, setIsOpen] = useState(false);
  const tabs = ["Todos", "Populares", "Mejor valoradas", "Estrenos", "Mi lista"];

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
    setIsOpen(false); // Cerrar el menú en móvil al seleccionar
  };

  return (
    <div className="relative w-11/12 mx-auto my-3">
      {/* Vista y Botón Móvil */}
      <div className="md:hidden flex h-12 justify-between items-center bg-neutral-700 px-5 rounded-md">
        <h1 className="font-semibold text-green-400">{activeTab}</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-50 hover:text-green-300">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Menú Desplegable (Móvil) */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-neutral-800 rounded-md shadow-lg z-20 flex flex-col py-2 border border-neutral-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-left px-5 py-3 font-semibold transition-colors ${
                activeTab === tab ? "text-green-400 bg-neutral-700" : "text-neutral-50 hover:bg-neutral-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Vista de Escritorio */}
      <div className="hidden md:flex h-12 justify-between items-center bg-neutral-700 px-5 rounded-md">
        {tabs.map((tab) => (
          <h1 
            key={tab}
            onClick={() => handleTabClick(tab)} 
            className={`font-semibold cursor-pointer transition-colors ${
              activeTab === tab ? "text-green-400" : "text-neutral-50 hover:text-green-300"
            }`}
          >
            {tab}
          </h1>
        ))}
      </div>
    </div>
  );
};