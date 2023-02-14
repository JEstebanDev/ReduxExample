import { createSlice } from "@reduxjs/toolkit";

//*SLICE
let id = 0;
const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    ADD_EMPLOYEE: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload,
      });
    },
  },
});

export const { ADD_EMPLOYEE } = employeeSlice.actions;
export default employeeSlice.reducer;
