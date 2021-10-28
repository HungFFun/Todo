import { React, useState } from "react";
import { Input } from "antd";
import "./style.scss";
import { getWork, createWord } from "../../../store/actions/workActions";

const AddTodoItem = ({ idNote, color, setWork }) => {
  const [title, setTitle] = useState("");

  const titleNote = (event) => {
    setTitle(event.target.value);
  };
  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      const data = { idNote: idNote, titleWork: title, isCompleted: false };
      createWord(data).then((res) => {
        setTitle("");
        getWork(idNote).then((resp) => setWork(resp));
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
          onChange={titleNote}
          style={{ backgroundColor: `${color}` }}
        />
      </form>
    </div>
  );
};

export default AddTodoItem;
