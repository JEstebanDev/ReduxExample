import { createAction } from "@reduxjs/toolkit";

export const GET_TASK = createAction("GET_TASK");
export const ADD_TASK = createAction("ADD_TASK");
export const REMOVE_TASK = createAction("REMOVE_TASK");
export const COMPLETED_TASK = createAction("COMPLETED_TASK");
