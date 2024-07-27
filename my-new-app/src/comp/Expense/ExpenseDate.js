import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-Us' ,{month : 'long'});
  const Day = props.date.toLocaleString('en-Us' ,{day : '2-digit'});
  const Year = props.date.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{Year}</div>
        <div className='expense-date__day'>{Day}</div>
    </div>
  );
}

export default ExpenseDate;
