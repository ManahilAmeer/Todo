import React, { createRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList";
import store from "./store";
class TodoApp extends React.Component {
  inputRef = createRef();
  constructor(props) {
    super(props);
    this.check=this.check.bind(this)
    this.deleteTodoHandler=this.deleteTodoHandler.bind(this);
    this.state = {
      userInput: "",
      hidden: {
        visibility: "hidden",
      },
      todoList: [],
    };
  }
  componentDidMount() {
    this.inputRef.current.focus();
    document.addEventListener("keydown", this._keyDown);
    document.title = "To-do App";
  }
  updateInput(value) {
    this.setState({ userInput: value });
  }
  addItem() {
    this.inputRef.current.focus();
    if (this.state.userInput === "") {
      this.setState({ hidden: { visibility: "visible" } });
    } else {
      this.setState({ hidden: { visibility: "hidden" } });
      const userInput = {
        value: this.state.userInput,
        done: false,
        strikeThrough: {
          textDecoration: "none",
        },
      };
      this.setState((state) => {
        const list = state.todoList.concat(userInput);
        return {
          todoList: list,
          userInput: "",
        };
      });
    }
  }
  check(key, checked) {
    this.setState((state) => {
      const todoList = state.todoList;
      var done, strikeThrough;
      if (!checked) {
        done = true;
        strikeThrough = {
          textDecoration: "line-through",
        };
      } else {
        done = false;
        strikeThrough = {
          textDecoration: "none",
        };
      }
      todoList[key].done = done;
      todoList[key].strikeThrough = strikeThrough;
      return {
        todoList: todoList,
      };
    });
  }
  deleteTodoHandler=(todoIndex)=>{
    this.setState((state) => {
      const list = state.todoList.filter((item, j) => todoIndex !== j);
      return {
        todoList:list,
      };
    });
  }
  _keyDown = (e) => {
    if (e.key === "Enter") {
      this.addItem();
    }
  };
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
