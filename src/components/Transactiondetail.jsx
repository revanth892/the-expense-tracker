import React from "react";
import './components.css';
// import burger from './media/burger.png';
import xmark from "./media/xmark.png";

export default function Transactiondetail(){
    return(
        <div className="transaction-detail">
           <div className="t">
                {/* <div><img src={burger} className="transaction-img"alt="burger"/></div> */}
                <div className="t1"><p className="transaction-title">Food</p></div>
            </div>
            <div className="amt-detail">
                <div className="amt-date">
                    <div><p className="transaction-amt">$20000</p></div>
                    <div><p className="transaction-date">yesterday</p></div>
                </div>
                <button className="delete-t"><img className="button-x"src={xmark} alt='x'/></button>
            </div>
        </div>   
    );
};