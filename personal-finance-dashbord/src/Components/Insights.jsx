import React from 'react';

const Insights = ({ transactions }) => {

  // category wise expense calculation 
  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  let topCategory = "N/A";

  const categories = Object.keys(categoryData);
  if (categories.length > 0) {
    topCategory = categories.reduce((a, b) =>
      categoryData[a] > categoryData[b] ? a : b
    );
  }

  // Monthly Data Calculation
  const monthlyData = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);
    if (t.type === "expense") {
      monthlyData[month] =
        (monthlyData[month] || 0) + t.amount;
    }
  });

  const months = Object.keys(monthlyData).sort();

  let comparison = "Not enough data";

  if (months.length >= 2) {
    const last = monthlyData[months[months.length - 1]];
    const prev = monthlyData[months[months.length - 2]];

    const percent = (((last - prev) / prev) * 100).toFixed(1);

    if (last > prev) {
      comparison = `Spending increased by ${percent}%`;
    } else if (last < prev) {
      comparison = `Spending decreased by ${Math.abs(percent)}%`;
    } else {
      comparison = "Spending is same as last month";
    }
  }

  // Total Expense Calculation
   const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-3">Insights</h2>

      <p>🏆 Highest spending category: <b>{topCategory}</b></p>

      <p>📊 {comparison}</p>

      <p>💸 Total expenses: ₹ <b>{totalExpense}</b></p>

      {/* 🔥 NEW: Monthly Expenses */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Monthly Expenses</h3>

        {months.map((month) => (
          <p key={month}>
            📅 {month} → ₹ <b>{monthlyData[month]}</b>
          </p>
        ))}
      </div>

    </div>
  );
};

export default Insights;