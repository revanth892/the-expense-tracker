import React from "react";
import './components.css';
import Displatdata from "./Displaydata";
import Transaction from "./Transaction";
export default function Leftpanel(){
    return(
        <div className="left-panel">
        <Displatdata />
        <Transaction />
        </div>
    );
};
