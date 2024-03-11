import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface WeeklyPin {
    id: number,
    description: string,
    date: string
}


interface WeeklyPinState {
    WeeklyPins: WeeklyPin[]
}

const initialState: WeeklyPinState = {
    WeeklyPins: [],
}

export const WeeklyPinSlice = createSlice({
    name: "WeeklyPin",
    initialState,
    reducers: {
        addWeeklyPin:(state, action) => {
            state.WeeklyPins.push({
                id: Math.floor(Math.random() * 999),
                description: action.payload.description,
                date: action.payload.date
            })
        }
    }
})


export default WeeklyPinSlice.reducer;
export const {addWeeklyPin} = WeeklyPinSlice.actions;