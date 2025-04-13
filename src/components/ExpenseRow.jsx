
import React from 'react';

const ExpenseRow = ({ expense, index, deleteExpense }) => {
  return (
    <tr>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>${expense.amount}</td>
      <td>
        <button onClick={() => deleteExpense(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default ExpenseRow;
