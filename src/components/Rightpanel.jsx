import React from "react";
import './components.css';
import Addtransaction from "./Addtransaction";
import Transactionsettings from "./Trasactionsettings";
export default function Rightpanel(){
    return(
        <div className="transactions">
            <Addtransaction />
            <Transactionsettings />
        </div>
    );
};