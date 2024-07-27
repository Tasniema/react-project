import React,{useState} from 'react';
import Expenses from './comp/Expense/Expenses';

import NewExpense from './comp/newExpense/NewExpense';


const DUMMY_EXPENSES =[
  {id:'e1' , title :'new tv' , amount:'249.6' , date: new Date(2024 , 2 ,28)},
  {id:'e2' ,title :'toilet paper' , amount:'700' , date: new Date(2023 , 3 ,9)},
  {id:'e3' ,title :'car insurance' , amount:'300' , date: new Date(2021 , 5 ,8)},
  {id:'e4' ,title :'news paper' , amount:'60' , date: new Date(2022 , 6,2)},
]
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
      });
    }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>

     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
