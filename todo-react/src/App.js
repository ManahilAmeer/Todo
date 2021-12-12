import "./logo.svg";
import "./index.css";
import TodoList from "./TodoList"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [hidden, setHidden] = useState({
    visibility: "hidden",
  });
  const updateInput = (value) => {
    setUserInput(value);
  };
  const addItem = () => {
    var visible = { visibility: "" };
    if (userInput) {
      setHidden({ visibility: "hidden" });
      const input = {
        value: userInput,
        done: false,
        strikeThrough: {
          textDecoration: "none",
        },
      };
      const list = [...todoList];
      list.push(input);
      setTodoList(list);
    } else {
      setHidden({ visibility: "visible" });
    }
    setUserInput("")
  };

  const con = () => {
    console.log(todoList);
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
              {todoList.map((item, index) => {
                return (
                  <tr>
                    <TodoList
                      index={index}
                      value={item.value}
                      done={item.done}
                      // check={this.check}
                      strikeThrough={item.strikeThrough}
                      todos={todoList}
                      // deleteTodoHandler={this.deleteTodoHandler}
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
}
export default App;
