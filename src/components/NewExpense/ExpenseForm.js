import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTtile, setEnteredTtile] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTtile: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });



    const titleChangeHandler = (event) => {
        setEnteredTtile(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTtile: 'event.target.value'
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState,enteredTtile: 'event.target.value'};
        // });
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTtile: 'event.target.value'
        // });
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTtile: 'event.target.value'
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTtile,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTtile('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className=".new-expense__controls">
                <div className="new-expense__control">
                    <label>Ttile</label>
                    <input type="text" value={enteredTtile} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}


export default ExpenseForm;


