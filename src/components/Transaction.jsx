import React from "react";
import './components.css';
import Transactiondetail from "./Transactiondetail";
export default function Transaction(){
    return(
        <div className="left-panel-transaction">
            <div className="transactions-bar">
                <div><p className="transaction-label">Transactions</p></div>
                {/* <div><p class="add-trancastion">Add Transaction</p></div> */}
            </div>
            <hr/>
            <div className="transactions-view">
                <Transactiondetail />    
                <Transactiondetail />  
                <Transactiondetail />  
                <Transactiondetail />         
            </div>
        </div>
    );
};