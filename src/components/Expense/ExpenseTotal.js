import React, {useContext} from 'react';
import {AppContext} from "../../contexts/AppContext";

const ExpenseTotal = () => {

    const {expenses, budget} = useContext(AppContext)

    const totalExpense = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0)

    return (
        <div className='alert alert-primary'>
            <span>Expense so far: £{totalExpense}</span>
        </div>
    );
};

export default ExpenseTotal;