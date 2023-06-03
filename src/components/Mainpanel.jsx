import React from "react";
import './components.css';
import Leftpanel from "./Leftpanel";
import Rightpanel from "./Rightpanel";

export default function Mainpanel(){
    return(
        <>
        <div className="main-container">
            <div className="interface-container">
                <Leftpanel />
                <Rightpanel />
            </div>
        </div>
        </>
    );
}