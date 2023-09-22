import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    name: "",
    age: "",
    date: "",
  },
  reducers: {
    addName: (state: any, action: any) => {
      state.name = action.payload;
    },
    addAge: (state: any, action: any) => {
      state.age = action.payload;
    },
    addDate: (state: any, action: any) => {
      state.date = action.payload;
    },
  },
});

export const { addName, addAge, addDate } = chatSlice.actions;

export default chatSlice.reducer;
