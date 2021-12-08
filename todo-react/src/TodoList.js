import React, { createRef } from "react";
import ReactDOM from "react-dom";
import { MdDelete } from "react-icons/md";

class TodoList extends React.Component{
    state={
        todoList:this.props.todos
    }
    constructor(props){
        super(props);
        
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
    render(){
        return(
            <>
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
            </>
        )
    }
}
export default TodoList;