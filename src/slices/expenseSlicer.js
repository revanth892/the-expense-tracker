import { createSlice } from "@reduxjs/toolkit";

const expenseSlicer=createSlice(
    {
        name:"expense",
        initialState:{data:[],totalexpense:0,totalincome:0},
        reducers:
        {
            addTransaction(state,action){
                state.data.push(action.payload);
                let tex=0,tic=0;
                const result = state.data.map(
                    (item)=>{
                        if(item.status==='Expense')
                        {
                            tex+=Number(item.Amount);
                            return item;
                        }
                        else
                        {
                            tic+=Number(item.Amount);
                            return item;
                        }
                    }
                );
                state.totalexpense=tex;
                state.totalincome=tic;
            },
            deleteTransaction(state,action){
                state.data = state.data.filter(item => item.id!==action.payload);        
                let tex=0,tic=0;
                const result = state.data.map(
                    (item)=>{
                        if(item.status==='Expense')
                        {
                            tex+=Number(item.Amount);
                            return item;
                        }
                        else
                        {
                            tic+=Number(item.Amount);
                            return item;
                        }
                    }
                );
                state.totalexpense=tex;
                state.totalincome=tic;
            },
            clearAllTransaction(state,action)
            {
                if(action.payload===1)
                {
                    state.data=[];
                    state.totalexpense=0;
                    state.totalincome=0;
                }
            }
        }
    }
);

export default expenseSlicer.reducer;
export const {addTransaction,deleteTransaction,clearAllTransaction} =expenseSlicer.actions;