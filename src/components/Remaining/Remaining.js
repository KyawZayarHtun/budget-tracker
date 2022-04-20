import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../contexts/AppContext";

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext)

    const totalExpense = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0)

    const alertType = budget < totalExpense ? 'alert-info' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpense}</span>
        </div>
    );
};

export default Remaining;