export const budgetReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {...state, expenses: [...state.expenses, action.payload]}
        case 'DELETE_EXPANSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        default:
            return state
    }
}