import React from "react";
import { MdDelete } from "react-icons/md";
const TodoList =(props)=> {
  const { done, index, strikeThrough,item, deleteTodoHandler, check } = props;
  // render() {
    return (
      <>
        <td>
          <input
            type="checkbox"
            name="check"
            onChange={() => check({key:index, done:done})}
            checked={done}
          />
        </td>
        <td style={strikeThrough}>{item}</td>
        <td>
          <MdDelete
            onClick={() => deleteTodoHandler(index)}
          />
        </td>
      </>
    );
  }
// }
export default TodoList;
