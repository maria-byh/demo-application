//import React from 'react';
import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpense = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    // for passing data from child to parent:
    /* const saveExpensesHandler = (expense) => {
      setExpenses(expense);
    */
  };
  
  {/* u can replace jsx with this js code:
    return (
      React.createElement('div',{},
        React.createElement('h2',{}, 'let\'s get started'),
        React.createElement(Expenses, {items: expenses})
      ));
  */}

  return (
    <div>
      <NewExpense items={expenses} 
        //onSaveExpenses={saveExpensesHandler}
        onSaveExpenses={addExpense}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
