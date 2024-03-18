import { configureStore } from "@reduxjs/toolkit";
import { WeeklyPinSlice } from "./features/WeeklyPinsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        WeeklyPin: WeeklyPinSlice.reducer
    }
})


export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;