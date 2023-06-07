import React from "react";
import './components.css';
import upward from './media/upward.png';
import { useSelector } from "react-redux";
export default function Displatdata(){
    const expense=useSelector(state=>state.expense.totalexpense);
    const income=useSelector(state=>state.expense.totalincome);
    console.log(income,expense);
    return(
        <div className="display-data">
        <div>
            <p className="balance">Total Balance</p>   
        </div>
        <div>
            <p className="amount">${income-expense}</p>
        </div>
      <div className="profit-loss">
            <div className="income-data">
                <div>
                    <img className="income-img" src={upward} alt="arrow"></img>
                </div>
                <div className="income">
                    <p className="income-label">Income</p>
                    <p className="income-amt">${income}</p>
                </div>
            </div>
            <div>
                <p className="empty"></p>
            </div>
            <div className="expense-data">
                <div>
                    <img className="expense-img" src={upward} alt="arrow"></img>
                </div>
                <div className="loss">
                    <p className="loss-label">Expense</p>
                    <p className="loss-amt">${expense}</p>
                </div>
            </div>
        </div>
    </div>
    );
};