import React, {createContext, useReducer} from 'react';
import {v4 as uuidV4} from 'uuid'
import {budgetReducer} from "../reducers/budgetReducer";

const initialState = {
    budget: 2000,
    expenses: [
        {id: uuidV4(), name: 'Shopping', cost: 40},
        {id: uuidV4(), name: 'Holiday', cost: 400},
        {id: uuidV4(), name: 'Transportation', cost: 70},
        {id: uuidV4(), name: 'Fuel', cost: 40},
        {id: uuidV4(), name: 'Child Care', cost: 500}

    ]
}

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <AppContext.Provider value={{budget: state.budget, expenses: state.expenses, dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;