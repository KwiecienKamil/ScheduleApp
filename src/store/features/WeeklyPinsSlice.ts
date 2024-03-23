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
    WeeklyPins: localStorage.getItem("weekly_pins") ? JSON.parse(localStorage.getItem("weekly_pins") || `[]`) : [],
    TodaysTasks: localStorage.getItem("todays_tasks") ? JSON.parse(localStorage.getItem("todays_tasks") || `[]`) : [],

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
            localStorage.setItem("weekly_pins", JSON.stringify(state.WeeklyPins))
        },
        removeWeeklyPin: (state,action) => {
            const updatedCart = state.WeeklyPins.filter((item) => item.id !== action.payload.id)
            state.WeeklyPins = updatedCart
            localStorage.setItem("weekly_pins", JSON.stringify(state.WeeklyPins))
         },
        addTodaysTask:(state, action) => {
            state.TodaysTasks.push({
                id: action.payload.id,
                description: action.payload.description,
                hour: action.payload.hour,
                icon: action.payload.icon,
                title: action.payload.title,
            })
            localStorage.setItem("todays_tasks", JSON.stringify(state.TodaysTasks))
        },
        removeTodaysTask: (state,action) => {
            const updatedCart = state.TodaysTasks.filter((item) => item.id !== action.payload.id)
            state.TodaysTasks = updatedCart
            localStorage.setItem("todays_tasks", JSON.stringify(state.TodaysTasks))
         },
    }
})


export default WeeklyPinSlice.reducer;
export const {addWeeklyPin, addTodaysTask, removeWeeklyPin,removeTodaysTask } = WeeklyPinSlice.actions;