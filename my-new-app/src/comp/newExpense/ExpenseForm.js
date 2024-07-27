
import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const onchangeHandler= (event)=>{
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState('');
  const onChangeAmount=(event)=>{
    setEnteredAmount(event.target.value);
  }
  const [enteredDate, setEnteredDate] = useState('');
  const onChangeDate=(event)=>{
    setEnteredDate(event.target.value);
    }
    const showFormHandler = (event) => {
      event.preventDefault();
      const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
      }
      props.onSaveExpenseDate(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      };
      

  return (
    <form onSubmit={showFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={onchangeHandler} />
      </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={onChangeAmount}/>
      </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='10-9-2021' max="3-8-2024" value={enteredDate} onChange={onChangeDate}/>
      </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
      
  );
}

export default ExpenseForm;
