# 💰 Personal Finance Dashboard

A modern, responsive personal finance tracker built with **React** + **Vite** + **Tailwind CSS**. Track your income and expenses, visualize spending patterns, and manage transactions — all in one place.

---

## 🚀 Live Features

- 📊 Dashboard with charts and insights
- 💸 Transaction management (Add / Edit / Delete)
- 🌙 Dark / Light mode toggle
- 📥 Export transactions as JSON
- 🔍 Filter, search, and sort transactions
- 👤 Role-based access (Admin / Viewer)
- 💾 Data persistence via localStorage

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Recharts | Charts (Line, Pie) |
| React Router v6 | Page routing |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

\```bash
git clone https://github.com/your-username/personal-finance-dashboard.git
cd personal-finance-dashboard
\```

### 2. Install dependencies

\```bash
npm install
\```

### 3. Start the development server

\```bash
npm run dev
\```

### 4. Open in browser

\```
http://localhost:5173
\```

> No `.env` file or API keys required. Everything runs locally.

---

## 📁 Project Structure

\```
src/
├── Components/
│   ├── Navbar.jsx               # Top navigation + dark mode toggle
│   ├── Cards.jsx                # Balance / Income / Expense cards
│   ├── Transactions.jsx         # Transaction table with filters
│   ├── LineChartComponent.jsx   # Income vs Expense line chart
│   └── PieChartComponent.jsx    # Category-wise spending pie chart
│
├── Pages/
│   └── Dashboard.jsx            # Main dashboard with insights
│
├── DB/
│   └── mockdata.js              # Sample transaction data
│
├── useTheme.jsx                 # Dark/light mode context & hook
├── App.jsx                      # Root component + routing
└── index.css                    # Tailwind CSS imports
\```

---

## 🧠 Approach & Architecture

### State Management
All state is managed locally using React's `useState` and `useEffect` hooks. No external state library (like Redux) is needed given the app's scope.

### Data Persistence
Transactions and user role are saved to **localStorage** automatically on every change, so data survives page refreshes.

### Role-Based Access
The app supports two roles selectable from the Navbar:
- **Viewer** — can view dashboard and transactions, no edit access
- **Admin** — can add, edit, and delete transactions

### Routing
React Router v6 handles two pages:
- `/` → Dashboard
- `/transactions` → Transaction manager

---

## ✨ Features Explained

### 📊 Dashboard
- **Summary Cards** — shows current Balance, Total Income, Total Expense
- **Insights Panel** — top spending category, month-over-month trend (% change), total expenses
- **Monthly Breakdown** — expense amount per month in a grid view
- **Line Chart** — income vs expense trend over time (by date)
- **Pie Chart** — donut chart showing expense split by category with percentages

### 💸 Transactions Page
- **Search** — filter transactions by category name in real time
- **Type Filter** — show All / Income / Expense only
- **Sort** — sort by Amount or Date
- **Add Transaction** *(Admin only)* — form with date, amount, category dropdown, and type
- **Edit Transaction** *(Admin only)* — pre-fills form with existing data
- **Delete Transaction** *(Admin only)* — removes transaction instantly
- **Export JSON** — downloads currently filtered transactions as a `.json` file

### 🌙 Dark / Light Mode
- Toggle button in the Navbar switches between dark and light themes
- Preference is saved in `localStorage` and persists on reload
- Respects system preference on first visit
- Smooth transition animation across all components

### 📥 JSON Export
- Exports only the currently **filtered** transactions (not all data)
- Downloads as `transactions.json` with clean formatting
- Useful for backups or further data analysis

---

## 📸 Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Dashboard | `/` | Charts, cards, insights |
| Transactions | `/transactions` | Full transaction table |

---

## 🔮 Possible Future Improvements

- CSV export support
- Date range filter
- Budget goal setting per category
- Real API integration (e.g. Firebase)
- Authentication system
- Mobile app (React Native)

---

## 👨‍💻 Author

Built as part of a frontend assignment.  
Feel free to fork, modify, and use!
