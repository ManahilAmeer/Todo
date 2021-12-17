import React, { createRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList";
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
  componentWillUnmount(){
    document.removeEventListener("keydown")
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="heading">
            <h1>TODO App</h1>
          </div>
          <div id="hidden" style={this.state.hidden}>
            You have not entered any Item! Please enter something
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.userInput}
                  ref={this.inputRef}
                  onChange={(todo) => this.updateInput(todo.target.value)}
                  placeholder="What do you want to do today?"
                />
              </div>
              <div className="grid-child">
                <button
                  type="submit"
                  className="btn btn-primary"
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
                    <tr key={}>
                      <TodoList
                        index={index}
                        value={item.value}
                        done={item.done}
                        check={this.check}
                        strikeThrough={item.strikeThrough}
                        todos={this.state.todoList}
                        deleteTodoHandler={this.deleteTodoHandler}
                      />
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
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
