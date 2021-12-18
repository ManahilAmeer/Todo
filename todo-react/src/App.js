import "./logo.svg";
import "./index.css";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem, deleteTodoHandler, check } from "./reducer";
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (obj) => dispatch(addItem(obj)),
    deleteTodoHandler: (id) => dispatch(deleteTodoHandler(id)),
    // updateTodo: (obj) => dispatch(updateTodos(obj)),
    check: (id) => dispatch(check(id)),
  };
};

const App = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [hidden, setHidden] = useState({
    visibility: "hidden",
  });

  const updateInput = (value) => {
    setUserInput(value);
  };
  const addItem = () => {
    if (userInput === "") {
      setHidden({ visibility: "visible" });
    } else {
      setHidden({ visibility: "hidden" });
      props.addItem({
        // id: Math.floor(Math.random() * 1000),
        item: userInput,
        done: false,
        strikeThrough: {
          textDecoration: "none",
        },
      });
      setUserInput("");
    }
  };

  return (
    <>
      <header className="App-header">
        <div class="heading">
          <h1>TODO App</h1>
        </div>
        <div id="hidden" style={hidden}>
          You have not entered any Item! Please enter something
        </div>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <input
                type="text"
                class="form-control"
                value={userInput}
                onChange={(todo) => updateInput(todo.target.value)}
                placeholder="What do you want to do today?"
              />
            </div>
            <div class="col">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => addItem()}
              >
                Add item
              </button>
              {/* <button onClick={()=>con()}>Add</button> */}
            </div>
          </div>
          <table>
            <tbody>
              {props.todos.map((item, index) => {
                return (
                  <tr>
                    <TodoList
                      index={index}
                      item={item.item}
                      done={item.done}
                      check={props.check}
                      strikeThrough={item.strikeThrough}
                      // todos={todoList}
                      deleteTodoHandler={props.deleteTodoHandler}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </header>
      {/* </div> */}
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
