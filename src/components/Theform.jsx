import React from 'react';
import { useForm } from 'react-hook-form';
import './components.css';

export default function App() {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className="add-transactions-view">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="ip" type="text" placeholder="Transaction" {...register("Transaction", {required: true})} />
                <input className="ip" type="number" placeholder="Amount" {...register("Amount", {required: true})} />
                <input className="ip" type="datetime" placeholder="Date" {...register("Date", {required: true})} />
                <div className="mcq">
                    <div className="add-t-income">
                        <input {...register("status", { })} type="radio" value="Income" />
                        <label className="add-t-income-text">Income</label>
                    </div>
                    <div className="add-t-expense">
                        <input {...register("status", { })} type="radio" value="Expense" />
                        <label className="add-t-expense-text">Expense</label>
                    </div>
                </div>  
                <input className="add-button" type="submit" value="Add" />
            </form>
        </div>
  );
}