import store from "./duck-module/configStore";
// * using the duck module
import {
  addTask,
  removeTask,
  completedTask,
  fetchTodo,
} from "./duck-module/task";

const unsubscribe = store.subscribe(() => {
  console.log("UPDATE", store.getState());
});

store.dispatch(addTask("Task 3"));
store.dispatch(addTask("Task 4"));
console.log(store.getState());

store.dispatch(removeTask(1));
console.log(store.getState());

store.dispatch(completedTask(2));

// async await function stunks
//store.dispatch(fetchTodo());
//unsubscribe();
