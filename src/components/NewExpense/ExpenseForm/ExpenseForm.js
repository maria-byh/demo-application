import { useState } from 'react';
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    {/** or using vvv 
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });
    */}

    //to get the entered data from the form
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        {/* or using vvv
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });

        or 

        setUserInput(prevState => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
        */}
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //to save the entered data 
    const submitHandler = (event) => {
        event.preventDefault();

        /* const expenseData =
            {
            id: Math.random(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }; */
        const expenseData = {
            id: Math.random(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.onCancel();
    };

    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};