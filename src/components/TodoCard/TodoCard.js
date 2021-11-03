import { React, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Card, Menu, Popover } from "antd";
import {
  PushpinTwoTone,
  EllipsisOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import "./TodoCard.scss";
import ColorCard from "./ColorCard/ColorCard";
import AddTodoItem from "./AddTodoItem";

import { useDispatch } from "react-redux";
import { updatePin, deleteNote } from "../../store/actions/noteActions";

const TodoCard = ({ note, pinColor }) => {
  const [work, setWork] = useState([]);

  const dispatch = useDispatch();

  const handleUpdatePin = (idNote) => {
    updatePin(idNote);
    dispatch({
      type: "RELOAD",
      payload: idNote,
    });
  };

  const handleDelteNote = (idNote) => {
    deleteNote(idNote);
    dispatch({
      type: "DELETE_NOTE",
      payload: idNote,
    });
  };

  return (
    <div>
      <Card
        title={note.title}
        extra={
          <PushpinTwoTone
            twoToneColor={pinColor}
            style={{ fontSize: "25px" }}
            onClick={() => handleUpdatePin(note._id)}
          />
        }
        className={`cart-custom `}
        style={{ backgroundColor: `${note.color}` }}
        actions={[
          <Popover content={<ColorCard idNote={note._id} />} trigger="hover">
            <BgColorsOutlined key="setting" />
          </Popover>,
          <Popover
            content={
              <Menu>
                <Menu.Item
                  key={note._id}
                  onClick={() => handleDelteNote(note._id)}
                >
                  Xóa note
                </Menu.Item>
              </Menu>
            }
            trigger="hover"
          >
            <EllipsisOutlined key="ellipsis" />
          </Popover>,
        ]}
      >
        <div>
          <div className="item-complete">
            <TodoItem
              idNote={note._id}
              setWork={setWork}
              work={work}
            ></TodoItem>
          </div>
          <AddTodoItem
            style={{ marginTop: "10px" }}
            idNote={note._id}
            color={note.color}
            setWork={setWork}
          ></AddTodoItem>
        </div>
      </Card>
    </div>
  );
};

export default TodoCard;
