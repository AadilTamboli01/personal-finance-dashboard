


import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer, Legend,
} from "recharts";

const LineChartComponent = ({ transactions }) => {
  const groupedData = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);
    if (!groupedData[month]) groupedData[month] = { month, income: 0, expense: 0 };
    if (t.type === "income") groupedData[month].income += Number(t.amount);
    else groupedData[month].expense += Number(t.amount);
  });

  const data = Object.values(groupedData)
    .sort((a, b) => a.month.localeCompare(b.month))
    .map((d) => ({
      ...d,
      label: new Date(d.month + "-01").toLocaleDateString("en-IN", {
        month: "short", year: "2-digit",
      }),
    }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm">
          <p className="font-bold mb-1 text-gray-300">{label}</p>
          {payload.map((p, i) => (
            <p key={i} style={{ color: p.color }}>
              {p.name === "income" ? "💰 Income" : "💸 Expense"}: ₹{p.value.toLocaleString("en-IN")}
            </p>
          ))}
          {payload.length === 2 && (
            <p className="mt-1 text-gray-400 text-xs border-t border-gray-700 pt-1">
              {payload[0].value > payload[1].value
                ? "✅ Saved ₹" + (payload[0].value - payload[1].value).toLocaleString("en-IN")
                : "⚠️ Overspent ₹" + (payload[1].value - payload[0].value).toLocaleString("en-IN")}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-lg h-full flex flex-col transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base md:text-lg font-bold text-gray-700 dark:text-white">
          📊 Income vs Expense
        </h2>
        <span className="text-xs text-gray-400 dark:text-gray-500">Monthly</span>
      </div>

      <div className="w-full flex-1 min-h-[220px] md:min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" strokeOpacity={0.4} />
            <XAxis dataKey="label" stroke="#9CA3AF" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend formatter={(value) => value === "income" ? "💰 Income" : "💸 Expense"} />
            <Area type="monotone" dataKey="income" stroke="#22C55E" strokeWidth={3} fill="url(#incomeGrad)" dot={{ r: 4, fill: "#22C55E", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6 }} />
            <Area type="monotone" dataKey="expense" stroke="#EF4444" strokeWidth={3} fill="url(#expenseGrad)" dot={{ r: 4, fill: "#EF4444", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;