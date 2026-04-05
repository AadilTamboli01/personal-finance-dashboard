


import React from 'react';
import { motion } from "framer-motion";

const Cards = ({ balance, income, expense }) => {
  const cards = [
    { title: "Balance", value: balance },
    { title: "Income", value: income },
    { title: "Expense", value: expense },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow transition-colors duration-300"
        >
          <h2 className="text-gray-500 dark:text-gray-400">{card.title}</h2>
          <p className="text-xl font-bold dark:text-white">₹ {card.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;