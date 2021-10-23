import { React, useState } from "react";
import { Input } from "antd";
import "./style.scss";
import { addTodo } from "../../../store/actions/todoActions";
import { getWork } from "../../../store/actions/work.actions";

const AddTodoItem = ({ idNote, color, setWork }) => {
  const [title, setTitle] = useState("");

  const addTitle = (event) => {
    setTitle(event.target.value);
  };
  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      const data = { idNote: idNote, titleWork: title, isCompleted: false };
      addTodo(data).then((res) => {
        setTitle("");
        getWork({ idNote }).then((resp) => setWork(resp));
      });
    }
  };

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
