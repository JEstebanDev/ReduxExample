import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./task";

/**
 ** This is the configuration for debug with the browser extension
 const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
** If you won't this piece of code you can install the module
*! npm i redux-devtool-extension
 */
const store = createStore(reducer, devToolsEnhancer({ trace: true }));
/**
 ** this is the configuration for the async await functions
 const store = createStore(reducer, applyMiddleware(thunk));
 */

export default store;
