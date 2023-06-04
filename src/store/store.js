import { configureStore } from "@reduxjs/toolkit";
import expenseSlicer from "../slices/expenseSlicer";

const store =configureStore(
    {
        reducer:
        {
            expense: expenseSlicer,
        },
    }
);
export default store;