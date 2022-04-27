import  { useState } from 'react';
import ExpensesDate from "./Card/expensesDate/ExpensesDate";
import Card from "./Card/Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
    const [changed, setChanged] = useState(props.title);
    //let changed = props.title;
  //  const handleChange = () => {
  //      setChanged("hello");
    //};
    return (
        <li>
            <Card>
                <ExpensesDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{changed}</h2>
                    <div className='expense-item__price'>$ {props.amount}</div>
                    {/* <button onClick={ () => {setChanged("hello"); console.log(changed)}}>Change Title</button> */}
                </div>
            </Card>
        </li>
    );
};