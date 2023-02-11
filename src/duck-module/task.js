//* action types
const ADD_TASk = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";

/**
 ** actions
 ** is a easy way because in the other side you only have to call those function
 ** and pass the required params
 * @param {*} task
 * @returns
 */
export const addTask = (task) => {
  return { type: ADD_TASk, payload: { task } };
};

export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: { id } };
};

export const completedTask = (id) => {
  return { type: COMPLETED_TASK, payload: { id } };
};
/**
 ** This is for the asynchronous actions for example search in api
 ** some data ex: getInfo from your api, check information, and update your state
 */
export const fetchTodo = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const { title } = await response.json();
    await dispatch(addTask(title));
  };
};

//* reducer
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
