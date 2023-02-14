import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST as API_REQUEST_ACTION } from "../../task/duck-module/action";

let id = 0;
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

//using an initial state
//*This taskSlice is for middleware
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    API_REQUEST: (state, action) => {
      state.loading = true;
    },
    API_REQUEST_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GET_TASK: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    ADD_TASK: (state, action) => {
      state.tasks.push(action.payload);
    },
    REMOVE_TASK: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    COMPLETED_TASK: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
    },
  },
});
/*
*This taskSlice is for function
const taskSlice = createSlice({
  name: "task",
  initialState:[],
  reducers: {
    GET_TASK: (state, action) => {
      //setting task to the initialState function
      return action.payload.tasks;
    },
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
*/

/*
*This taskSlice is for asyncThunk

import axios from "../../util/http";
export const fetchTask = createAsyncThunk(
  "fetchTask",
  async (a, { rejectWithValue }) => {
    try {
      //*calling api just /task for the util/http file
      const response = await axios.get("/tasks");
      return { task: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    GET_TASK: (state, action) => {
      state.tasks = action.payload;
    },
    ADD_TASK: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    REMOVE_TASK: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    COMPLETED_TASK: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks[index].completed = true;
    },
  },
  extraReducers: {
    [fetchTask.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTask.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTask.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});
*/

const url = "/tasks";

export const loadTasks = () =>
  API_REQUEST_ACTION({
    url,
    onStart: API_REQUEST.type,
    method: "GET",
    onSuccess: GET_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const addNewTask = (task) =>
  API_REQUEST_ACTION({
    url,
    method: "POST",
    data: task,
    onSuccess: ADD_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const completeTask = (task) =>
  API_REQUEST_ACTION({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: COMPLETED_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const deleteTask = (task) =>
  API_REQUEST_ACTION({
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: REMOVE_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const {
  API_REQUEST,
  API_REQUEST_FAIL,
  GET_TASK,
  ADD_TASK,
  REMOVE_TASK,
  COMPLETED_TASK,
} = taskSlice.actions;
export default taskSlice.reducer;
