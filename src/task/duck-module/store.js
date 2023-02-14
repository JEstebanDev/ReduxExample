import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee";
import taskSlice from "../../redux-toolkit/folder-structure/reducer";
import log from "../middleware/log";
import error from "../middleware/error";
import logger from "redux-logger";
const storeEmployee = configureStore({
  reducer: {
    employee: employeeSlice,
    task: taskSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});

export default storeEmployee;
