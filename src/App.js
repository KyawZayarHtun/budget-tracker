import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget/Budget";
import Remaining from "./components/Remaining/Remaining";
import ExpenseTotal from "./components/Expense/ExpenseTotal";
import ExpenseList from "./components/Expense/ExpenseList";
import AddExpense from "./components/Expense/AddExpense";
import AppContextProvider from "./contexts/AppContext";


function App() {
    return (
        <AppContextProvider>


            <div className="container">
                <h1 className="mt-3">My Budget Planner</h1>
                <div className="row mt-3">
                    <div className="col-sm">
                        <Budget/>
                    </div>
                    <div className="col-sm">
                        <Remaining/>
                    </div>
                    <div className="col-sm">
                        <ExpenseTotal/>
                    </div>
                </div>
                <h3 className="mt-3">Expense</h3>
                <div className="row mt-3">
                    <div className="col-sm">
                        <ExpenseList/>
                    </div>
                </div>
                <h3 className="mt-3">Add Expense</h3>
                <div className="row mt-3">
                    <div className="col-sm">
                        <AddExpense/>
                    </div>
                </div>
            </div>
        </AppContextProvider>
    );
}

export default App;
