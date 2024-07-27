import React from 'react';
import ExpensItem from './ExpensItem';
import './ExpensesList.css';


const ExpensesList = (props) => {

  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>found no expense</h2>
  }
  return (
  <ul className='expenses-list'>
{props.items.map((expense) => (
      <ExpensItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
    ))}
  </ul>
  );
}

export default ExpensesList;
