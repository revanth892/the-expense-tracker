import React from "react";
import './components.css';
import Transactiondetail from "./Transactiondetail";
import { useSelector } from "react-redux";
export default function Transaction(){
    const data=useSelector(state=>state.expense.data);
    console.log(data);
    const list = data.map(item=><Transactiondetail key={item.id} id={item.id} Amount={item.Amount} Transaction={item.Transaction} date={item.Date}/>);
    return(
        <div className="left-panel-transaction">
            <div className="transactions-bar">
                <div><p className="transaction-label">Transactions</p></div>
                {/* <div><p class="add-trancastion">Add Transaction</p></div> */}
            </div>
            <hr/>
            <div className="transactions-view">
                {list}
            </div>
        </div>
    );
};