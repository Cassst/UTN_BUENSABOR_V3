import React, { useEffect, useState, useContext } from "react";
import logo from "/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider.jsx";
import Profile from "./Profile.jsx";

export const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  {
    /*Items NavBar*/
  }
  const navItems = (
    <>
      <li>
        <a className="text-green" href="/">
          Inicio
        </a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
            <li>
              <a>Empanadas</a>
            </li>
            <li>
              <a>Lomos</a>
            </li>
            <li>
              <a>Hamburguesas</a>
            </li>
            <li>
              <a>Bebidas</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Servicios</summary>
          <ul className="p-2">
            <li>
              <a>Pedidos Online</a>
            </li>
            <li>
              <a>Seguimiento de Orden</a>
            </li>
            <li>
              <a>Atención al Cliente</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Ofertas</a>
      </li>
    </>
  );
  return (
    <header className="navbar-wrapper bg-white max-w-screen-2xl container mx-auto transition-all duration-300 ease-in-out">
      <div
        className={`navbar x1:px-24 sticky top-0 ${
          isSticky ? "shadow mg-base-100" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="px-3" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/*Seccion buscador*/}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/*Seccion Carro*/}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-3 lg:flex hidden items-center justify-center"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Productos</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Ver Compra
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*Boton Ingresar*/}
          {user ? (
            <Profile user={user} />
          ) : (
            <button
              className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white"
              style={{ border: "none" }}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <FaRegUserCircle />
              Ingresar
            </button>
          )}
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
