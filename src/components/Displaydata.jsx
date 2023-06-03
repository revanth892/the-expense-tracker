import React from "react";
import './components.css';
import upward from './media/upward.png';

export default function Displatdata(){
    return(
        <div className="display-data">
        <div>
            <p className="balance">Total Balance</p>   
        </div>
        <div>
            <p className="amount">$ 6000.00</p>
        </div>
      <div className="profit-loss">
            <div className="income-data">
                <div>
                    <img className="income-img" src={upward} alt="arrow"></img>
                </div>
                <div className="income">
                    <p className="income-label">Income</p>
                    <p className="income-amt">$1000.00</p>
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
                    <p className="loss-amt">$1000.00</p>
                </div>
            </div>
        </div>
    </div>
    );
};