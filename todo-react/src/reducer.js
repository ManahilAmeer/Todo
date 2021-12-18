import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addItem: (state, action) => {
      state.push(action.payload);
      //   console.log(state.length);
      return state;
    },
    //remove todos
    deleteTodoHandler: (state, action) => {
      return state.filter((item,index) => index !== action.payload);
    },
    //completed
    check: (state, action) => {
      return state.map((todo,index) => {
          console.log(index);
        if (index === action.payload.key) {
            if(!action.payload.done){
                return {
                  ...todo,
                  done: true,
                  strikeThrough: { textDecoration: "line-through" }
                };
            }
            else{
                return {
                  ...todo,
                  done: false,
                  strikeThrough: { textDecoration: "none" },
                };
            }
        }
        return todo;
      });
    },
  },
});

export const { addItem, deleteTodoHandler, check } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
