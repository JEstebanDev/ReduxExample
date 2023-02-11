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

//
store.dispatch(fetchTodo());
//unsubscribe();
/*
In short this code imports the store from the configStore file and then uses the duck module to add two tasks, remove one task, and mark one task as completed. It also subscribes to store updates and logs them in the console. Finally, it unsubscribes from store updates before marking a task as completed.
*/
