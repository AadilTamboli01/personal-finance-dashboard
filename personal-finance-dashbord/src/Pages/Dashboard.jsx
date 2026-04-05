


import React from "react";
import { motion } from "framer-motion";
import Cards from "../Components/Cards.jsx";
import LineChartComponent from "../Components/LineChartComponent.jsx";
import PieChartComponent from "../Components/PieChartComponent.jsx";

const Dashboard = ({ balance, income, expense, transactions }) => {

  const categoryData = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] = (categoryData[t.category] || 0) + t.amount;
    }
  });

  let topCategory = "N/A";
  const categories = Object.keys(categoryData);
  if (categories.length > 0) {
    topCategory = categories.reduce((a, b) =>
      categoryData[a] > categoryData[b] ? a : b
    );
  }

  const monthlyData = {};
  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);
    if (t.type === "expense") {
      monthlyData[month] = (monthlyData[month] || 0) + t.amount;
    }
  });

  const months = Object.keys(monthlyData).sort();
  let comparison = "Not enough data";

  if (months.length >= 2) {
    const last = monthlyData[months[months.length - 1]];
    const prev = monthlyData[months[months.length - 2]];
    const percent = (((last - prev) / prev) * 100).toFixed(1);
    if (last > prev) comparison = `📈 Increased by ${percent}%`;
    else if (last < prev) comparison = `📉 Decreased by ${Math.abs(percent)}%`;
    else comparison = "⚖️ Same as last month";
  }

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 rounded-2xl p-3 md:p-6">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold mb-5 text-gray-800 dark:text-white"
      >
        📊 Finance Dashboard
      </motion.h1>

      <Cards balance={balance} income={income} expense={expense} />

      {/* Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mt-4">
        {[
          { title: "Top Category", value: `🏆 ${topCategory}` },
          { title: "Monthly Trend", value: comparison },
          { title: "Total Expense", value: `₹ ${totalExpense.toLocaleString("en-IN")}`, color: "text-red-500" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.title}</p>
            <h2 className={`text-lg md:text-xl font-bold mt-2 dark:text-white ${item.color || ""}`}>
              {item.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Monthly Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl mt-4 md:mt-6 p-4 md:p-6 rounded-2xl shadow-lg"
      >
        <h2 className="font-semibold mb-4 text-base md:text-lg text-gray-800 dark:text-white">
          📅 Monthly Expenses
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {months.map((month, index) => (
            <motion.div
              key={month}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-3 rounded-xl text-center shadow-sm"
            >
              <p className="text-gray-500 dark:text-gray-300 text-xs">{month}</p>
              <p className="font-semibold text-sm md:text-base dark:text-white">
                ₹ {monthlyData[month].toLocaleString("en-IN")}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-lg"
        >
          <LineChartComponent transactions={transactions} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-lg"
        >
          <PieChartComponent transactions={transactions} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;