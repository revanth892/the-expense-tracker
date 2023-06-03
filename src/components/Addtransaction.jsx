import React from "react";
import './components.css';
import Theform from "./Theform";
export default function Addtransaction(){
    return(
        <>
            < div className="transactions-bar">
                    <div><p className="add-trancastion">Add Transaction</p></div>
            </div>
            <hr/>
            <Theform />
        </>
    );
};