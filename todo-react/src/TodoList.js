import React from "react";
import { MdDelete } from "react-icons/md";
class TodoList extends React.Component {
  render() {
    return (
      <>
        <td>
          <input
            type="checkbox"
            name="check"
            onChange={() => this.props.check(this.props.index, this.props.done)}
            checked={this.props.done}
          />
        </td>
        <td style={this.props.strikeThrough}>{this.props.value}</td>
        <td>
          <MdDelete
            onClick={() => this.props.deleteTodoHandler(this.props.index)}
          />
        </td>
      </>
    );
  }
}
export default TodoList;
