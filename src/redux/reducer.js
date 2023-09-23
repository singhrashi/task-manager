import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_THEME,
  INITIALIZE_THEME,
} from "./action";

const initialThemeState = {
  theme: "light",
};
const inititalTaskState = {
  tasks: [],
};

export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case INITIALIZE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export const taskReducer = (state = inititalTaskState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case EDIT_TASK: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case DELETE_TASK: {
      const filterTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: filterTasks,
      };
    }
    default:
      return state;
  }
};
