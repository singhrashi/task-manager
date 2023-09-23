import { createStore, combineReducers } from "redux";
import { taskReducer, themeReducer } from "./reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;
