import { createSlice, createSelector  } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    name: "",
    age: "",
    date: "",
  },
  reducers: {
    addName: (state: any, action: any) => {
      state.name = action.name;
    },
    addAge: (state: any, action: any) => {
      state.age = action.age;
    },
    addDate: (state: any, action: any) => {
      state.date = action.date;
    },
  },
});

export const { addName, addAge, addDate } = chatSlice.actions;
export const addDateSelector = (state: any) => state.chat.date;
export default chatSlice.reducer;
