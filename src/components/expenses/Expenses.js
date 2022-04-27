import { useState } from 'react';
//import ExpenseItem from "../expenseItem/ExpenseItem";
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import "./Expenses.css";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('all');
    //const [filteredItems, setFilteredItems] = useState(props.items); 

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
        /* setFilteredItems(
            props.items.filter(item => {
                if (selectedYear === 'all') {
                    return true;
                } 
                else {
                    return item.date.getFullYear() == selectedYear;
                }
            })
        ); */
    };

    const filteredItems = props.items.filter(item => {
        
        if (filteredYear === 'all') {
                return true;
        } 
        else {
            // the type of a value is string, so we need to convert the year to string
            return item.date.getFullYear().toString() === filteredYear;
        }
    }); 

   

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses= {filteredItems} />
            <ExpensesList filteredItems= {filteredItems} />
           
            {/* {filteredItems.length === 0 && <p>No expenses</p>}
            {filteredItems.length > 0 && filteredItems.map(item => {
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                );
            })} */}
            {/* {(filteredItems.length > 0) ? 
            filteredItems.map(item => {
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                );
            }) :
            <p>No expenses</p>} */}
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </div>
    );
};