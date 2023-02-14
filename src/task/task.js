import { ADD_EMPLOYEE } from "./duck-module/employee";
import storeEmployee from "./duck-module/store";

storeEmployee.subscribe(() => {
  //console.log("SUBSCRIBE", storeEmployee.getState());
});
storeEmployee.dispatch(ADD_EMPLOYEE({ name: "Juan" }));

storeEmployee.dispatch(ADD_EMPLOYEE({ name: "Pedro" }));

storeEmployee.dispatch({
  type: "SHOW_ERROR",
  payload: { error: "User not found" },
});
