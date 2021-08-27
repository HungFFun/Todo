import React from "react";
import { Modal, Popover } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import "./style.scss";
import ColorCard from "../ColorCard/ColorCard";
import TodoItem from "../../TodoItem/TodoItem";
import AddTodoItem from "../AddTodoItem";

const ModalTodo = ({ visible, onHandleCancel, note, setAddItem }) => {
  return (
    <Modal
      visible={visible}
      title={note.title}
      onCancel={onHandleCancel}
      bodyStyle={{ backgroundColor: `${note.color}` }}
      footer={[
        <Popover content={<ColorCard idNote={note._id} />} trigger="hover">
          <BgColorsOutlined key="setting" />
        </Popover>,
      ]}
    >
      <div className="item-complete">
        <TodoItem item={note._id}></TodoItem>
      </div>
      <hr></hr>
      <div className="item-un-complete">
        <TodoItem item={note._id}></TodoItem>
      </div>
      <AddTodoItem
        style={{ marginTop: "10px" }}
        idNote={note._id}
        color={note.color}
        setAddItem={setAddItem}
      ></AddTodoItem>
    </Modal>
  );
};

export default ModalTodo;
