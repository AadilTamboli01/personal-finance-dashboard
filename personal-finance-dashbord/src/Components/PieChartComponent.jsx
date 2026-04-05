

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4", "#A855F7"];

const PieChartComponent = ({ transactions }) => {
  const categoryData = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] = (categoryData[t.category] || 0) + Number(t.amount);
    }
  });

  const data = Object.keys(categoryData).map((key) => ({ name: key, value: categoryData[key] }));
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-5 rounded-2xl shadow-lg hover:shadow-2xl h-full flex flex-col transition-colors duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-gray-700 dark:text-white">🍕 Spending Breakdown</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">₹ {total}</span>
      </div>

      <div className="relative w-full flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={3} cornerRadius={8} animationDuration={800}>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                backgroundColor: "#1F2937",
                border: "none",
                color: "#fff",
              }}
              formatter={(value, name) => {
                const percent = total ? ((value / total) * 100).toFixed(1) : 0;
                return [`₹ ${value} (${percent}%)`, name];
              }}
            />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total Expense</p>
            <p className="text-xl font-bold dark:text-white">₹ {total}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PieChartComponent;