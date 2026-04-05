
import React, { useState } from "react";

const Transactions = ({ transactions, setTransactions, role }) => {
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    date: "", amount: "", category: "", type: "income",
  });

  let filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );
  if (typeFilter !== "all") filtered = filtered.filter((t) => t.type === typeFilter);
  if (sortBy === "amount") filtered.sort((a, b) => b.amount - a.amount);
  else if (sortBy === "date") filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setTransactions(transactions.map((t) =>
        t.id === editId ? { ...formData, id: editId, amount: Number(formData.amount) } : t
      ));
      setEditId(null);
    } else {
      setTransactions([...transactions, { id: Date.now(), ...formData, amount: Number(formData.amount) }]);
    }
    setShowForm(false);
    setFormData({ date: "", amount: "", category: "", type: "income" });
  };

  const handleDelete = (id) => setTransactions(transactions.filter((t) => t.id !== id));

  const handleEdit = (t) => {
    setFormData(t);
    setEditId(t.id);
    setShowForm(true);
  };

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-lg transition-colors duration-300">

      {/* Header */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white w-full sm:w-auto">
          💸 Transactions
        </h2>

        <input
          placeholder="🔍 Search category"
          className="border dark:border-gray-600 px-3 py-2 rounded-lg outline-none bg-white dark:bg-gray-700 dark:text-white text-sm w-full sm:w-auto focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setFilter(e.target.value)}
        />

        <select
          className="border dark:border-gray-600 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white text-sm w-full sm:w-auto"
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">💰 Income</option>
          <option value="expense">💸 Expense</option>
        </select>

        <select
          className="border dark:border-gray-600 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white text-sm w-full sm:w-auto"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>

        <button
          onClick={handleExportJSON}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition w-full sm:w-auto"
        >
          📥 Export JSON
        </button>
      </div>

      {/* Table - Desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm">
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Type</th>
              {role === "Admin" && <th className="p-3">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="p-3 text-sm dark:text-gray-300">{t.date}</td>
                <td className="p-3 font-medium dark:text-gray-200">{t.category}</td>
                <td className="p-3 font-semibold dark:text-white">₹ {t.amount.toLocaleString("en-IN")}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    t.type === "income"
                      ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                  }`}>
                    {t.type === "income" ? "💰 Income" : "💸 Expense"}
                  </span>
                </td>
                {role === "Admin" && (
                  <td className="p-3 flex gap-2">
                    <button onClick={() => handleEdit(t)} className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-lg text-sm">✏️</button>
                    <button onClick={() => handleDelete(t.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm">🗑</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards - Mobile */}
      <div className="sm:hidden flex flex-col gap-3">
        {filtered.map((t) => (
          <div key={t.id} className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold dark:text-white">{t.category}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                t.type === "income"
                  ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
              }`}>
                {t.type === "income" ? "💰 Income" : "💸 Expense"}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{t.date}</span>
              <span className="font-bold text-gray-800 dark:text-white">₹ {t.amount.toLocaleString("en-IN")}</span>
            </div>
            {role === "Admin" && (
              <div className="flex gap-2 mt-1">
                <button onClick={() => handleEdit(t)} className="flex-1 bg-yellow-400 hover:bg-yellow-500 py-1.5 rounded-lg text-sm">✏️ Edit</button>
                <button onClick={() => handleDelete(t.id)} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1.5 rounded-lg text-sm">🗑 Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Button */}
      {role === "Admin" && (
        <>
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl shadow w-full sm:w-auto"
            onClick={() => { setShowForm(true); setEditId(null); setFormData({ date: "", amount: "", category: "", type: "income" }); }}
          >
            ➕ Add Transaction
          </button>

          {showForm && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border dark:border-gray-600">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required className="border dark:border-gray-500 p-2 rounded-lg bg-white dark:bg-gray-800 dark:text-white text-sm" />
                <input type="number" placeholder="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} required className="border dark:border-gray-500 p-2 rounded-lg bg-white dark:bg-gray-800 dark:text-white text-sm" />
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required className="border dark:border-gray-500 p-2 rounded-lg bg-white dark:bg-gray-800 dark:text-white text-sm">
                  <option value="">Select Category</option>
                  <option value="Food">🍔 Food</option>
                  <option value="Groceries">🛒 Groceries</option>
                  <option value="Transport">🚗 Transport</option>
                  <option value="Fuel">⛽ Fuel</option>
                  <option value="Rent">🏠 Rent</option>
                  <option value="Bills">💡 Bills</option>
                  <option value="Internet">🌐 Internet</option>
                  <option value="Shopping">🛍 Shopping</option>
                  <option value="Entertainment">🎬 Entertainment</option>
                  <option value="Travel">✈️ Travel</option>
                  <option value="Health">💊 Health</option>
                  <option value="Education">📚 Education</option>
                  <option value="Salary">💼 Salary</option>
                  <option value="Freelance">🧑‍💻 Freelance</option>
                  <option value="Investment">📈 Investment</option>
                  <option value="Other">🔖 Other</option>
                </select>
                <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="border dark:border-gray-500 p-2 rounded-lg bg-white dark:bg-gray-800 dark:text-white text-sm">
                  <option value="income">💰 Income</option>
                  <option value="expense">💸 Expense</option>
                </select>
                <div className="flex gap-3 col-span-1 sm:col-span-2">
                  <button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm">{editId ? "Update" : "Save"}</button>
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg text-sm">Cancel</button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Transactions;