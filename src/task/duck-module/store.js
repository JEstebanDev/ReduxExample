import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee";
import taskSlice from "../../redux-toolkit/folder-structure/reducer";
const storeEmployee = configureStore({
  reducer: {
    employee: employeeSlice,
    task: taskSlice,
  },
});

export default storeEmployee;
