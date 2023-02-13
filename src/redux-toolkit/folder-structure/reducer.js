import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    ADD_TASK: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    REMOVE_TASK: (state, action) => {
      const index = state.findIndex((task) => task.id == action.payload.id);
      state.splice(index, 1);
    },
    COMPLETED_TASK: (state, action) => {
      const index = state.findIndex((task) => task.id == action.payload.id);
      state[index].completed = true;
    },
  },
});

export const { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } = taskSlice.actions;
export default taskSlice.reducer;
