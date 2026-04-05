

import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Transactions from './Components/Transactions.jsx';
import mockData from './DB/mockdata.js';
import Dashboard from './Pages/Dashboard.jsx';
import Navbar from './Components/Navbar.jsx';
import { ThemeProvider } from './useTheme.jsx';


const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : mockData;
  });

  const [role, setRole] = useState(() => {
    const saved = localStorage.getItem("role");
    return saved ? JSON.parse(saved) : "Viewer";
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("role", JSON.stringify(role));
  }, [role]);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <ThemeProvider>
      <div className="p-6 bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors duration-300">
        <Navbar role={role} setRole={setRole} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                income={income}
                expense={expense}
                balance={balance}
                transactions={transactions}
              />
            }
          />
          <Route
            path="/transactions"
            element={
              <Transactions
                transactions={transactions}
                setTransactions={setTransactions}
                role={role}
              />
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;