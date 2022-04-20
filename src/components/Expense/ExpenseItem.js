import React, {useContext} from 'react';
import {TiDelete} from "react-icons/ti";
import {AppContext} from "../../contexts/AppContext";

const ExpenseItem = ({id, name, cost}) => {
    const {dispatch} = useContext(AppContext)

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPANSE',
            payload: id
        })
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span>{name}</span>
            <div className="justify-content-end">
            <span className="badge rounded-pill bg-primary">
                £{cost}
            </span>
                <TiDelete size='1.5em' onClick={handleDelete}/>
            </div>
        </li>
    );
};

export default ExpenseItem;