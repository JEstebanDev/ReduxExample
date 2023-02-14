import axios from "axios";
import {
  fetchTask,
  GET_TASK,
  loadTasks,
} from "../redux-toolkit/folder-structure/reducer";
import { ADD_EMPLOYEE } from "./duck-module/employee";
import storeGeneral from "./duck-module/store";
//import axios from "../../util/http";
/*
storeGeneral.subscribe(() => {
  console.log("SUBSCRIBE", storeGeneral.getState());
});
storeGeneral.dispatch(ADD_EMPLOYEE({ name: "Juan" }));

storeGeneral.dispatch(ADD_EMPLOYEE({ name: "Pedro" }));

storeGeneral.dispatch({
  type: "SHOW_ERROR",
  payload: { error: "User not found" },
});
*/

/*
const gettingTasks = async () => {
  try {
    //*calling api just /task for the util/http file
    const response = await axios.get("/tasks");
    //*dispatch action
    storeGeneral.dispatch(GET_TASK({ tasks: response.data }));
  } catch (error) {
    storeGeneral.dispatch({
      type: "SHOW_ERROR",
      payload: { error: error.message },
    });
  }
};
gettingTasks();
*/

//*calling api using async thunk
//storeGeneral.dispatch(fetchTask());

//*calling api using middle ware
storeGeneral.dispatch(loadTasks());
