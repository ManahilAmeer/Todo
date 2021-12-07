import React, { createRef } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MdDelete } from "react-icons/md";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";

class Todo extends React.Component {
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
      todoList.push(userInput);
      this.setState({
        todoList,
        userInput: "",
      });
    }
  }
  deleteTodo(key) {
    const todoList = [...this.state.todoList];
    const newList = todoList.filter((item) => item.id !== key);
    this.setState({
      todoList: newList,
    });
  }
  check(key, checked) {
    const todoList = [...this.state.todoList];
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
    this.setState({
      todoList: todoList,
    });
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
            <table>
              <tbody>
              {this.state.todoList.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        name="check"
                        onChange={() => this.check(index, item.done)}
                        checked={item.done}
                      />
                      </td>
                      <td style={item.strikeThrough}>{item.value}</td>
                      <td>
                      <MdDelete onClick={() => this.deleteTodo(item.id)} />
                      </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);
