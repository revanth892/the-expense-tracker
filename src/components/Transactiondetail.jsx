import React from "react";
import './components.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import burger from './media/burger.png';
import xmark from "./media/xmark.png";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../slices/expenseSlicer";
// import { useSelector } from "react-redux";
export default function Transactiondetail(props){
    // const data=useSelector((state)=>state);
    // console.log(data);
    const dispatch=useDispatch();
    return(
        <div className="transaction-detail">
           <div className="t">
                {/* <div><img src={burger} className="transaction-img"alt="burger"/></div> */}
                <div className="t1"><p className="transaction-title">{props.Transaction}</p></div>
            </div>
            <div className="amt-detail">
                <div className="amt-date">
                    <div><p className="transaction-amt"><FontAwesomeIcon icon=" fas fa-indian-rupee-sign" size="sm" style={{color:  "#394456",}} />{props.Amount}</p></div>
                    <div><p className="transaction-date">&nbsp;</p></div>
                </div>
                <button className="delete-t" onClick={()=>{dispatch( deleteTransaction(props.id))}}><img className="button-x"src={xmark} alt='x'/></button>
            </div>
        </div>   
    );
};