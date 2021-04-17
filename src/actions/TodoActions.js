import { ADD_TODO, DELETE_TODO,SAVE_TODO, DONE_TODO, FILTER_TODO } from "./types";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};
export const deleteToDO = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id,
  };
};

export const filterTodo = (filterValue) => {
  return {
    type: FILTER_TODO,
    payload: filterValue,
  };
};
export const saveTodo = (todoSaved) => {
  return {
    type: SAVE_TODO,
    payload: todoSaved,
  }; }
