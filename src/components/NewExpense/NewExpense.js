import  { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm/ExpenseForm';

export default function NewExpense(props) {
   {/*  const saveExpenseDataHandler = (enteredExpenseData) => {
       const expenseData = [
            enteredExpenseData,
            ...props.items
        ]; 
        props.onSaveExpenses(enteredExpenseData);
        console.log(expenseData);
    };  */}

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
/*
    console.log(!isEditing);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    

     */

    return (
        /* <div className="new-expense">
            <ExpenseForm 
                //onSaveExpenseData= {saveExpenseDataHandler} 
                onSaveExpenseData={props.onSaveExpenses}
                item={props.items}
            />
        </div> */
        <div className='new-expense'>
            {!isEditing && (
                <button 
                onClick={startEditingHandler}
                >Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={props.onSaveExpenses}
                    item={props.items}
                    //onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};