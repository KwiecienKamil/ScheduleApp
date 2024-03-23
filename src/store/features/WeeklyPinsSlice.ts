import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface WeeklyPin {
    id: number,
    description: string,
    date: string,
    emoji: string
};

export interface TodaysTask {
    id: number,
    icon: string,
    title: string,
    description: string,
    hour: string,
}


interface WeeklyPinState {
    WeeklyPins: WeeklyPin[],
    TodaysTasks: TodaysTask[]
}

const initialState: WeeklyPinState = {
    WeeklyPins: [],
    TodaysTasks: [],

}

export const WeeklyPinSlice = createSlice({
    name: "WeeklyPin",
    initialState,
    reducers: {
        addWeeklyPin:(state, action) => {
            state.WeeklyPins.push({
                id: action.payload.id,
                description: action.payload.description,
                date: action.payload.date,
                emoji: action.payload.emoji
            })
        },
        addTodaysTask:(state, action) => {
            state.TodaysTasks.push({
                id: action.payload.id,
                description: action.payload.description,
                hour: action.payload.date,
                icon: action.payload.icon,
                title: action.payload.icon,
            })
        },
    }
})


export default WeeklyPinSlice.reducer;
export const {addWeeklyPin, addTodaysTask} = WeeklyPinSlice.actions;