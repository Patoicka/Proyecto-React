import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginOpen, login, logout } from "../../store/slices/authSlice";

export const LoginModal = () => {
  const dispatch = useDispatch();
  const { isLoginOpen, isLoggedIn } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isLoginOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setLoginOpen(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login());
      dispatch(setLoginOpen(false));
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-[60] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-neutral-900 rounded-lg max-w-md w-full p-8 border border-gray-700 relative">
        <button
          onClick={() => dispatch(setLoginOpen(false))}
          className="absolute top-4 right-4 z-10 bg-neutral-800 hover:bg-neutral-700 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          aria-label="Cerrar"
        >
          <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
        </button>

        {!isLoggedIn ? (
          <div>
            <h2 className="text-2xl font-bold text-neutral-50 mb-6 text-center">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-neutral-50 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">Contraseña</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-neutral-50 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors mt-4"
              >
                Entrar
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-50 mb-4">Mi Cuenta</h2>
            <p className="text-neutral-400 mb-6">Sesión iniciada correctamente.</p>
            <button
              onClick={() => {
                dispatch(logout());
                dispatch(setLoginOpen(false));
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
