import React, { useState } from 'react';
import Card from '../UI/card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div className='main-li'>
      <li>
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
    </Card>
      </li>
    </div>
  );
};

export default Expenses;