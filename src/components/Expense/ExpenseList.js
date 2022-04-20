import React, {useContext} from 'react';
import ExpenseItem from "./ExpenseItem";

import {AppContext} from "../../contexts/AppContext";


const ExpenseList = () => {

    const {expenses} = useContext(AppContext)

    return (
        <ul className='list-group'>
            {expenses.map(expense => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} key={expense.id}/>

            ))}
        </ul>
    );
};

export default ExpenseList;