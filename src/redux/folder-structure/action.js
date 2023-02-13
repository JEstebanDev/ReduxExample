import { ADD_TASk, REMOVE_TASK, COMPLETED_TASK } from "./actionType";

export const addTask = (task) => {
  return { type: ADD_TASk, payload: { task } };
};

export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: { id } };
};

export const completedTask = (id) => {
  return { type: COMPLETED_TASK, payload: { id } };
};
