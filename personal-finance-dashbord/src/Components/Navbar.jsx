

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../useTheme.jsx";

const Navbar = ({ role, setRole }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    `px-3 py-1 rounded-lg transition text-sm ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600"
    }`;

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 shadow-md rounded-2xl px-4 py-3 mb-6 transition-colors duration-300">

      {/* Top Row */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
          💰 Finance
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            <Link to="/" className={linkStyle("/")}>Dashboard</Link>
            <Link to="/transactions" className={linkStyle("/transactions")}>Transactions</Link>
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400">Role:</span>
          <select
            className="bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Viewer</option>
            <option>Admin</option>
          </select>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm font-medium"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="px-2 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 border-t dark:border-gray-700 pt-3">
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
            <Link to="/" className={linkStyle("/")} onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link to="/transactions" className={linkStyle("/transactions")} onClick={() => setMenuOpen(false)}>Transactions</Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Role:</span>
            <select
              className="bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg text-sm focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Viewer</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;