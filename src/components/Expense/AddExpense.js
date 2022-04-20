import React, {useContext, useState} from 'react';
import {AppContext} from "../../contexts/AppContext";
import {v4 as uuidV4} from 'uuid'

const AddExpense = () => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const {dispatch} = useContext(AppContext);

    const handleSubmit = e => {
        e.preventDefault();
        // alert(`name is : ${name} & cost is : ${cost}`)
        const expense = {
            id: uuidV4(),
            name,
            cost: parseInt(cost)
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })



        setName('');
        setCost('');
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input
                        id='name'
                        type="text"
                        required
                        className='form-control'
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input
                        id='cost'
                        type="text"
                        required
                        className='form-control'
                        value={cost}
                        onChange={e => setCost(e.target.value)}/>
                </div>
                <div className="col-sm">
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpense;