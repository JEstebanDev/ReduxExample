import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETED_TASK,
} from "./folder-structure/reducer";
import store from "./folder-structure/store";

//** To check all the actions */
store.subscribe(() => {
  console.log("SUBSCRIBE", store.getState());
});

store.dispatch(ADD_TASK({ task: "Study frontend" }));

store.dispatch(ADD_TASK({ task: "Study backend" }));

store.dispatch(REMOVE_TASK({ id: 2 }));

store.dispatch(COMPLETED_TASK({ id: 1 }));
