import { React, useState, useEffect } from "react";
import { Input } from "antd";
import "./style.scss";
import { addTodo, getTodos } from "../../../store/actions/todoActions";

import { useDispatch, useSelector } from "react-redux";
const AddTodoItem = ({ idNote, color }) => {
  const [title, setTitle] = useState("");
  const stateTodo = useSelector((state) => state.todos);
  console.log(stateTodo);
  const dispatch = useDispatch();

  const addTitle = (event) => {
    setTitle(event.target.value);
  };

  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      const data = { titleWork: title, idNote: idNote };
      dispatch(addTodo(data));
      if (!stateTodo.isCreated) {
        dispatch(getTodos());
      }
      setTitle("");
    }
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "10px" }}>
      <form onSubmit={addSingleTodo}>
        <Input
          size="large"
          placeholder="Thêm công việc"
          value={title}
          onChange={addTitle}
          style={{ backgroundColor: `${color}` }}
        />
      </form>
    </div>
  );
};

export default AddTodoItem;
