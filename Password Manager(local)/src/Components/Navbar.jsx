import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <div className="font-extrabold text-lg sm:text-xl tracking-wide whitespace-nowrap">
          <span className="text-green-600">&lt;</span>
          <span className="text-gray-800">Password </span>
          <span className="text-green-600">Manager/&gt;</span>
        </div>

        {/* Links */}
        <ul className="flex gap-4 sm:gap-8 text-gray-700 font-medium text-sm sm:text-base flex-wrap justify-end">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "hover:text-green-600 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "hover:text-green-600 transition"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "hover:text-green-600 transition"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "hover:text-green-600 transition"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

