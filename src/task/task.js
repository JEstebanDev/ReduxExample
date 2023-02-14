import { ADD_EMPLOYEE } from "./duck-module/employee";
import storeEmployee from "./duck-module/store";

storeEmployee.subscribe(() => {
  console.log("SUBSCRIBE", storeEmployee.getState());
});
storeEmployee.dispatch(ADD_EMPLOYEE("Juan"));

storeEmployee.dispatch(ADD_EMPLOYEE("Pedro"));
