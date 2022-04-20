import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../contexts/AppContext";

const Budget = () => {

    const {budget} = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>

        </div>
    );
};

export default Budget;