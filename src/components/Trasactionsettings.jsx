import React from "react";
import './components.css';
import { clearAllTransaction } from "../slices/expenseSlicer";
import { useDispatch } from "react-redux";
export default function Transactionsettings(){
    const dispatch=useDispatch();
    return(
        <div className="transactions-settings">
            <div className="transactions-bar">
                <div><p className="add-trancastion">Settings</p></div>
            </div>
            <hr />
            <button onClick={()=>{dispatch(clearAllTransaction(1))}} className="reset-button" type="submit">Reset Transaction History</button>
            <p className="settings-banner">Note: All the transaction data will be lost</p>
        </div>
    );
};