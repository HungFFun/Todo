import { React, useContext } from "react";
import TodoItem from "./TodoItem";
import { Card } from "antd";
import AddTodoItem from "./AddTodoItem";

import { TodoContext } from "../contexts/TodoContext";
const TodoCard = () => {
  //load data
  const { data } = useContext(TodoContext);
  return (
    <div>
      <Card extra={<AddTodoItem></AddTodoItem>} className="cart-custom">
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index}>
              <TodoItem item={item}></TodoItem>
            </div>
          ))}
        {data.length === 0 && (
          <div>
            <h1> Không có phần tử </h1>
          </div>
        )}
      </Card>
    </div>
  );
};

export default TodoCard;
