export const TOGGLE_THEME = "TOGGLE_THEME";
export const INITIALIZE_THEME = "INITIALIZE_THEME";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const initializeTheme = (theme) => ({
  type: INITIALIZE_THEME,
  payload: theme,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
