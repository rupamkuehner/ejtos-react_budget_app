import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { expenses  } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((prevValue, currValue) => {
            return prevValue + currValue.cost;
        }, 0);
        //const budgetValue = event.target.value;
        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else if (event.target.value > 20000) {
            alert("You cannot exceed a budget of 20000");
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
