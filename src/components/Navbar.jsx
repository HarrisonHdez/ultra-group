"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__content container">
        <a className="nav__logo" href="/">
          <Image width={180} height={40} src="svg/logo.svg" alt="logo ultra group" />
        </a>

        <div className={`nav__links ${isOpen ? "mobile__menu" : ""}`}>
          <a className="nav__link" href="">
            Home
          </a>
          <a className="nav__link" href="">
            About
          </a>
         
          {isLoggedIn ? (
            <button className="nav__close" onClick={handleLogout}>Cerrar sesión</button>
          ) : (
            <Link href="/acceso">
              <Image
                width={20}
                height={20}
                src="svg/account.svg"
                alt="ICONO PARA ACCEDER AL PANEL DE ADMIN"
              />
            </Link>
          )}
        </div>

        <button
          className={`iconburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir/Cerrar Menú"
        >
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
