import { configureStore } from "@reduxjs/toolkit";
import reducer from "./employee";

const storeEmployee = configureStore({ reducer });

export default storeEmployee;
