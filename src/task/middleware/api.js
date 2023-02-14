import axios from "axios";
import { API_REQUEST, SHOW_ERROR } from "../duck-module/action";
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== API_REQUEST.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000/api",
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: SHOW_ERROR.type, payload: error.message });
      dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
