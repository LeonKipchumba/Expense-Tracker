
import React from 'react';
import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses, searchTerm, deleteExpense }) => {
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense, index) => (
          <ExpenseRow
            key={index}
            index={index}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
