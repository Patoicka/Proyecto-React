import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "./Search";
import perfil from "../assets/perfil.JPEG";
import { MovieList } from "./MovieList";
import { Tabs } from "./Tabs";
import { LoginModal } from "./Modals/LoginModal";
import { setLoginOpen, login, logout } from "../store/slices/authSlice";
import { setSearchQuery } from "../store/slices/movieSlice";

export const Layout = () => {
  const dispatch = useDispatch();
  const { isLoginOpen, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="flex-1 bg-neutral-900 w-full h-full">
      <div className="bg-neutral-900 min-h-screen w-full flex flex-col items-center relative overflow-y-auto">
        <img
          src={perfil}
          alt="perfil"
          onClick={() => dispatch(setLoginOpen(true))}
          className="absolute right-10 top-5 w-12 h-12 rounded-full bg-amber-50 object-cover z-10 cursor-pointer hover:ring-2 hover:ring-green-400 transition-all"
        />
        <div className="flex-1 w-full px-4 pt-20">
          <Search
            text="text"
            placeholder="Buscar pelicula..."
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
          <Tabs />
          <MovieList />
        </div>
      </div>
      <LoginModal />
    </div>
  );
};
