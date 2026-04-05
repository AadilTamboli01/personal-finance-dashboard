// const mockData = [
//   // March Data
//   { id: 1, date: "2026-03-01", amount: 400, category: "Food", type: "expense" },
//   { id: 2, date: "2026-03-05", amount: 1500, category: "Salary", type: "income" },
//   { id: 3, date: "2026-03-10", amount: 700, category: "Travel", type: "expense" },

//   // April Data
//   { id: 4, date: "2026-04-01", amount: 500, category: "Food", type: "expense" },
//   { id: 5, date: "2026-04-02", amount: 2000, category: "Salary", type: "income" },
//   { id: 6, date: "2026-04-03", amount: 800, category: "Travel", type: "expense" },

//   // May Data
//   { id: 7, date: "2026-05-01", amount: 600, category: "Food", type: "expense" },
//   { id: 8, date: "2026-05-02", amount: 2200, category: "Salary", type: "income" },
//   { id: 9, date: "2026-05-05", amount: 900, category: "Shopping", type: "expense" },
// ];

// export default mockData;


const mockData = [
  // ─── January 2026 ───
  { id: 1,  date: "2026-01-01", amount: 55000, category: "Salary",        type: "income"  },
  { id: 2,  date: "2026-01-02", amount: 1200,  category: "Food",          type: "expense" },
  { id: 3,  date: "2026-01-04", amount: 800,   category: "Transport",     type: "expense" },
  { id: 4,  date: "2026-01-05", amount: 3500,  category: "Groceries",     type: "expense" },
  { id: 5,  date: "2026-01-07", amount: 999,   category: "Entertainment", type: "expense" },
  { id: 6,  date: "2026-01-08", amount: 5000,  category: "Freelance",     type: "income"  },
  { id: 7,  date: "2026-01-10", amount: 12000, category: "Rent",          type: "expense" },
  { id: 8,  date: "2026-01-12", amount: 2500,  category: "Shopping",      type: "expense" },
  { id: 9,  date: "2026-01-14", amount: 600,   category: "Food",          type: "expense" },
  { id: 10, date: "2026-01-15", amount: 1500,  category: "Bills",         type: "expense" },
  { id: 11, date: "2026-01-17", amount: 800,   category: "Health",        type: "expense" },
  { id: 12, date: "2026-01-18", amount: 3000,  category: "Investment",    type: "income"  },
  { id: 13, date: "2026-01-20", amount: 450,   category: "Food",          type: "expense" },
  { id: 14, date: "2026-01-22", amount: 700,   category: "Internet",      type: "expense" },
  { id: 15, date: "2026-01-25", amount: 1800,  category: "Education",     type: "expense" },
  { id: 16, date: "2026-01-28", amount: 550,   category: "Transport",     type: "expense" },
  { id: 17, date: "2026-01-30", amount: 2200,  category: "Shopping",      type: "expense" },

  // ─── February 2026 ───
  { id: 18, date: "2026-02-01", amount: 55000, category: "Salary",        type: "income"  },
  { id: 19, date: "2026-02-02", amount: 1100,  category: "Food",          type: "expense" },
  { id: 20, date: "2026-02-03", amount: 12000, category: "Rent",          type: "expense" },
  { id: 21, date: "2026-02-05", amount: 4500,  category: "Travel",        type: "expense" },
  { id: 22, date: "2026-02-07", amount: 6000,  category: "Freelance",     type: "income"  },
  { id: 23, date: "2026-02-08", amount: 900,   category: "Groceries",     type: "expense" },
  { id: 24, date: "2026-02-10", amount: 1500,  category: "Bills",         type: "expense" },
  { id: 25, date: "2026-02-12", amount: 3200,  category: "Shopping",      type: "expense" },
  { id: 26, date: "2026-02-13", amount: 750,   category: "Health",        type: "expense" },
  { id: 27, date: "2026-02-14", amount: 2000,  category: "Entertainment", type: "expense" },
  { id: 28, date: "2026-02-16", amount: 5000,  category: "Investment",    type: "income"  },
  { id: 29, date: "2026-02-18", amount: 500,   category: "Food",          type: "expense" },
  { id: 30, date: "2026-02-20", amount: 700,   category: "Internet",      type: "expense" },
  { id: 31, date: "2026-02-22", amount: 1200,  category: "Education",     type: "expense" },
  { id: 32, date: "2026-02-25", amount: 600,   category: "Transport",     type: "expense" },
  { id: 33, date: "2026-02-27", amount: 1800,  category: "Groceries",     type: "expense" },

  // ─── March 2026 ───
  { id: 34, date: "2026-03-01", amount: 55000, category: "Salary",        type: "income"  },
  { id: 35, date: "2026-03-01", amount: 1300,  category: "Food",          type: "expense" },
  { id: 36, date: "2026-03-02", amount: 12000, category: "Rent",          type: "expense" },
  { id: 37, date: "2026-03-03", amount: 8000,  category: "Freelance",     type: "income"  },
  { id: 38, date: "2026-03-04", amount: 2800,  category: "Groceries",     type: "expense" },
  { id: 39, date: "2026-03-06", amount: 1500,  category: "Bills",         type: "expense" },
  { id: 40, date: "2026-03-07", amount: 700,   category: "Internet",      type: "expense" },
  { id: 41, date: "2026-03-09", amount: 1500,  category: "Health",        type: "expense" },
  { id: 42, date: "2026-03-10", amount: 7000,  category: "Travel",        type: "expense" },
  { id: 43, date: "2026-03-12", amount: 4000,  category: "Investment",    type: "income"  },
  { id: 44, date: "2026-03-14", amount: 900,   category: "Food",          type: "expense" },
  { id: 45, date: "2026-03-15", amount: 3500,  category: "Shopping",      type: "expense" },
  { id: 46, date: "2026-03-18", amount: 2000,  category: "Education",     type: "expense" },
  { id: 47, date: "2026-03-20", amount: 650,   category: "Transport",     type: "expense" },
  { id: 48, date: "2026-03-22", amount: 1100,  category: "Entertainment", type: "expense" },
  { id: 49, date: "2026-03-25", amount: 500,   category: "Food",          type: "expense" },
  { id: 50, date: "2026-03-28", amount: 2200,  category: "Groceries",     type: "expense" },

  // ─── April 2026 ───
  { id: 51, date: "2026-04-01", amount: 58000, category: "Salary",        type: "income"  },
  { id: 52, date: "2026-04-01", amount: 12000, category: "Rent",          type: "expense" },
  { id: 53, date: "2026-04-02", amount: 1400,  category: "Food",          type: "expense" },
  { id: 54, date: "2026-04-03", amount: 9000,  category: "Freelance",     type: "income"  },
  { id: 55, date: "2026-04-04", amount: 3000,  category: "Groceries",     type: "expense" },
  { id: 56, date: "2026-04-05", amount: 1500,  category: "Bills",         type: "expense" },
  { id: 57, date: "2026-04-06", amount: 700,   category: "Internet",      type: "expense" },
  { id: 58, date: "2026-04-07", amount: 4500,  category: "Shopping",      type: "expense" },
  { id: 59, date: "2026-04-09", amount: 1200,  category: "Health",        type: "expense" },
  { id: 60, date: "2026-04-10", amount: 6000,  category: "Investment",    type: "income"  },
  { id: 61, date: "2026-04-11", amount: 800,   category: "Food",          type: "expense" },
  { id: 62, date: "2026-04-13", amount: 15000, category: "Travel",        type: "expense" },
  { id: 63, date: "2026-04-15", amount: 2500,  category: "Education",     type: "expense" },
  { id: 64, date: "2026-04-17", amount: 1800,  category: "Entertainment", type: "expense" },
  { id: 65, date: "2026-04-19", amount: 700,   category: "Transport",     type: "expense" },
  { id: 66, date: "2026-04-21", amount: 600,   category: "Food",          type: "expense" },
  { id: 67, date: "2026-04-24", amount: 2000,  category: "Groceries",     type: "expense" },
  { id: 68, date: "2026-04-27", amount: 3500,  category: "Shopping",      type: "expense" },
  { id: 69, date: "2026-04-30", amount: 1000,  category: "Fuel",          type: "expense" },

  // ─── May 2026 ───
  { id: 70, date: "2026-05-01", amount: 58000, category: "Salary",        type: "income"  },
  { id: 71, date: "2026-05-01", amount: 12000, category: "Rent",          type: "expense" },
  { id: 72, date: "2026-05-02", amount: 1600,  category: "Food",          type: "expense" },
  { id: 73, date: "2026-05-03", amount: 10000, category: "Freelance",     type: "income"  },
  { id: 74, date: "2026-05-04", amount: 3200,  category: "Groceries",     type: "expense" },
  { id: 75, date: "2026-05-05", amount: 1500,  category: "Bills",         type: "expense" },
  { id: 76, date: "2026-05-06", amount: 700,   category: "Internet",      type: "expense" },
  { id: 77, date: "2026-05-07", amount: 5000,  category: "Shopping",      type: "expense" },
  { id: 78, date: "2026-05-08", amount: 2500,  category: "Health",        type: "expense" },
  { id: 79, date: "2026-05-10", amount: 8000,  category: "Investment",    type: "income"  },
  { id: 80, date: "2026-05-11", amount: 900,   category: "Food",          type: "expense" },
  { id: 81, date: "2026-05-13", amount: 20000, category: "Travel",        type: "expense" },
  { id: 82, date: "2026-05-15", amount: 3000,  category: "Education",     type: "expense" },
  { id: 83, date: "2026-05-17", amount: 1200,  category: "Entertainment", type: "expense" },
  { id: 84, date: "2026-05-19", amount: 850,   category: "Transport",     type: "expense" },
  { id: 85, date: "2026-05-21", amount: 700,   category: "Food",          type: "expense" },
  { id: 86, date: "2026-05-23", amount: 2500,  category: "Groceries",     type: "expense" },
  { id: 87, date: "2026-05-26", amount: 1100,  category: "Fuel",          type: "expense" },
  { id: 88, date: "2026-05-28", amount: 4000,  category: "Shopping",      type: "expense" },
  { id: 89, date: "2026-05-30", amount: 600,   category: "Food",          type: "expense" },
];

export default mockData;