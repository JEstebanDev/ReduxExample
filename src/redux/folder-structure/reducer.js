import { ADD_TASk, REMOVE_TASK, COMPLETED_TASK } from "./actionType";
let id = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASk:
      return [
        ...state,
        { id: ++id, task: action.payload.task, completed: false },
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case COMPLETED_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true,
            }
          : task
      );
    default:
      return state;
  }
};

export default reducer;
