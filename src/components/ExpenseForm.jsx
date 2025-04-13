
import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ description: '', category: '', amount: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={expense.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="category"
        value={expense.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
