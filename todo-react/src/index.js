import React, { createRef } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MdDelete } from "react-icons/md";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList";
class TodoApp extends React.Component {
  id = 0;
  inputRef = createRef();
  constructor(props) {
    super(props);
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
        id: this.id++,
        value: this.state.userInput,
        done: false,
        strikeThrough: {
          textDecoration: "none",
        },
      };
      const todoList = [...this.state.todoList];
      this.state.todoList.push(userInput);
      this.setState({
        // todoList:todoList,
        userInput: "",
      });
      // alert(this.state.todoList[0].value)
    }
  }
  _keyDown = (e) => {
    if (e.key === "Enter") {
      this.addItem();
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="heading">
            <h1>TODO App</h1>
          </div>
          <div id="hidden" style={this.state.hidden}>
            You have not entered any Item! Please enter something
          </div>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.userInput}
                  ref={this.inputRef}
                  onChange={(todo) => this.updateInput(todo.target.value)}
                  placeholder="What do you want to do today?"
                />
              </div>
              <div class="grid-child">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={() => this.addItem()}
                >
                  Add item
                </button>
              </div>
            </div>
            <TodoList todos={this.state.todoList} deleteTodo={this.deleteTodo}/>
          </div>
        </header>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
