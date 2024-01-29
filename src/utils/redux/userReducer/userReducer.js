import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
  name: "user",
  initialState: {
    users: [],
    todos: [],
    inpVal: ""
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getTodo: (state, action) => {
      state.todos = action.payload;
    },
    setInp: (state, action) => {
      state.inpVal = action.payload;
    }
  }
});
const model = slice.actions;

function loadUsers() {
  return {
    type: "apiCall",
    payload: { url: "/users", method: "GET", onSuccess: model.getUsers }
  };
}

function save(data) {
  return {
    type: "apiCall",
    payload: {
      url: "/users",
      method: "POST",
      data: { name: data },
      onSuccess: loadUsers
    }
  };
}

function loadTodo() {
  return {
    type: "apiCall",
    payload: {
      url: "/todos",
      method: "GET",
      onSuccess: model.getTodo
    }
  };
}

export default slice;
export const action = { ...slice.actions, loadUsers, loadTodo, save };
