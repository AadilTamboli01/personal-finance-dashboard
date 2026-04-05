



import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../useTheme";

const Navbar = ({ role, setRole }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const linkStyle = (path) =>
    `px-3 py-1 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600"
    }`;

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 shadow-md rounded-2xl px-6 py-3 flex justify-between items-center mb-6 transition-colors duration-300">

      {/* Left Side */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
          💰 Finance
        </h1>

        <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          <Link to="/" className={linkStyle("/")}>Dashboard</Link>
          <Link to="/transactions" className={linkStyle("/transactions")}>Transactions</Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">Role:</span>

        <select
          className="bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Viewer</option>
          <option>Admin</option>
        </select>

    {/* Dark Mode Toggle*/}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm font-medium"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;