import { React, useState } from "react";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

function AddTodoItem(props) {
  const [title, setTitle] = useState("");
  const addTodo = props.addTodoFunc;
  const addTitle = (event) => {
    setTitle(event.target.value);
  };
  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      addTodo(title);
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
AddTodoItem.prototype = {
  addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodoItem;
