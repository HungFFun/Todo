import { React, useContext, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Card, Menu, Popover } from "antd";
import {
  PushpinTwoTone,
  EllipsisOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import "./TodoCard.scss";
import { TodoContext } from "../../contexts/TodoContext";
import ColorCard from "./ColorCard/ColorCard";
import ModalTodo from "./Modal";

const TodoCard = ({ note, pinColor }) => {
  //load data
  const { updatePin, deleteNote } = useContext(TodoContext);
  const [visible, setVisible] = useState(false);
  const onHandleModal = () => {
    setVisible(true);
  };
  const onHandleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Card
        title={note.title}
        extra={
          <PushpinTwoTone
            twoToneColor={pinColor}
            style={{ fontSize: "25px" }}
            onClick={() => updatePin(note._id)}
          />
        }
        className={`cart-custom ${visible ? "cart-none" : {}}`}
        style={{ backgroundColor: `${note.color}` }}
        actions={[
          <Popover content={<ColorCard idNote={note._id} />} trigger="hover">
            <BgColorsOutlined key="setting" />
          </Popover>,
          <Popover
            content={
              <Menu>
                <Menu.Item onClick={() => deleteNote(note._id)}>
                  Xóa note
                </Menu.Item>
              </Menu>
            }
            trigger="hover"
          >
            <EllipsisOutlined key="ellipsis" />,
          </Popover>,
        ]}
      >
        <div onClick={() => onHandleModal()}>
          <div className="item-complete">
            <TodoItem item={note._id}></TodoItem>
          </div>
          <hr></hr>
          <div className="item-un-complete">
            <TodoItem item={note._id}></TodoItem>
          </div>
        </div>
      </Card>

      <ModalTodo
        key={note._id}
        visible={visible}
        onHandleCancel={onHandleCancel}
        note={note}
      />
    </div>
  );
};

export default TodoCard;
