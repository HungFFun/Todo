import { React, useState, useContext } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import PropTypes from "prop-types";
import { TodoContext } from "../contexts/TodoContext";

const AddTodoItem = (props) => {
  const [title, setTitle] = useState("");
  const { addTodoInArr } = useContext(TodoContext);
  // const addTodo = props.addTodoFunc;
  const addTitle = (event) => {
    setTitle(event.target.value);
  };
  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      addTodoInArr(title);
      setTitle("");
    }
  };
  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <Input
          size="large"
          placeholder="large size"
          prefix={<UserOutlined />}
          value={title}
          onChange={addTitle}
        />
      </form>
    </div>
  );
};
// AddTodoItem.prototype = {
//   addTodoFunc: PropTypes.func.isRequired,
// };

export default AddTodoItem;
