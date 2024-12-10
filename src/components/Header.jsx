import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-bold">My App</h1>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex space-x-4 md:static absolute bg-blue-600 w-full left-0 md:w-auto md:bg-transparent ${
            menuOpen ? "top-12" : "top-[-200px]"
          } transition-all duration-300`}
        >
          <li>
            <Link
              to="/"
              className={`hover:underline ${
                isActive("/") ? "underline font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className={`hover:underline ${
                isActive("/users") ? "underline font-bold" : ""
              }`}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/create-user"
              className={`hover:underline ${
                isActive("/create-user") ? "underline font-bold" : ""
              }`}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
