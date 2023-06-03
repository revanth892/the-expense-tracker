import React from "react";
import './components.css';


export default function Transactionsettings(){
    return(
        <div className="transactions-settings">
            <div className="transactions-bar">
                <div><p className="add-trancastion">Settings</p></div>
            </div>
            <hr />
            <button className="reset-button" type="submit">Reset Transaction History</button>
            <p className="settings-banner">Note: All the transaction data will be lost</p>
        </div>
    );
};