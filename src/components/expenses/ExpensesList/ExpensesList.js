import "./ExpensesList.css";
import ExpenseItem from "./expenseItem/ExpenseItem";

export default function ExpensesList(props) {

    if (props.filteredItems.length === 0) {
        return <h2 className="expenses-list__fallback">no expenses found</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.filteredItems.map(item => {
            return <ExpenseItem 
                key={item.id} 
                title={item.title} 
                amount={item.amount} 
                date={item.date} 
            />
            })}
        </ul>
    );
};