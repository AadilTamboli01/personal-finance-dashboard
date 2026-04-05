



import React from 'react';
import { motion } from "framer-motion";

const Cards = ({ balance, income, expense }) => {
  const cards = [
    { title: "💰 Balance", value: balance, color: "text-blue-500" },
    { title: "📈 Income", value: income, color: "text-green-500" },
    { title: "📉 Expense", value: expense, color: "text-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow transition-colors duration-300"
        >
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            {card.title}
          </h2>

          <p className={`text-2xl font-bold mt-1 ${card.color}`}>
            ₹ {card.value.toLocaleString("en-IN")}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;