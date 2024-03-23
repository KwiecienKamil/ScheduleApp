// import { PayloadAction, createSlice } from "@reduxjs/toolkit"


// export interface TodaysTasks {
//     id: number,
//     icon: string,
//     title: string,
//     description: string,
//     hour: string,
// }


// interface TodaysTasksState {
//     TodaysTasks: TodaysTasks[]
// }

// const initialState: TodaysTasks = {
//     TodaysTasks: [],
    
// }

// export const WeeklyPinSlice = createSlice({
//     name: "WeeklyPin",
//     initialState,
//     reducers: {
//         addWeeklyPin:(state, action) => {
//             state.WeeklyPins.push({
//                 id: action.payload.id,
//                 description: action.payload.description,
//                 date: action.payload.date,
//                 emoji: action.payload.emoji
//             })
//         }
//     }
// })


// export default WeeklyPinSlice.reducer;
// export const {addWeeklyPin} = WeeklyPinSlice.actions;