
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updatedExpenses);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    setSortKey(key);
  };

  const getSortedExpenses = () => {
    let sorted = [...expenses];
    if (sortKey === 'description') {
      sorted.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortKey === 'category') {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    }
    return sorted;
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search expenses"
        />
        <button onClick={() => handleSort('description')}>Sort by Description</button>
        <button onClick={() => handleSort('category')}>Sort by Category</button>
      </div>

      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable
        expenses={getSortedExpenses()}
        searchTerm={searchTerm}
        deleteExpense={deleteExpense}
      />
    </div>
  );
};

export default App;
