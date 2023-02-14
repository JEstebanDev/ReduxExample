import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee";
import taskSlice from "../../redux-toolkit/folder-structure/reducer";
import log from "../middleware/log";
import error from "../middleware/error";
import logger from "redux-logger";
import api from "../middleware/api";

const storeGeneral = configureStore({
  reducer: {
    employee: employeeSlice,
    task: taskSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
    api,
  ],
});

export default storeGeneral;
