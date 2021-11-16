import { React, useState } from "react";
import TodoItem from "../TodoItem";
import { Card, Menu, Popover } from "antd";
import {
  PushpinTwoTone,
  EllipsisOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import "./style.scss";
import ColorCard from "./ColorCard";
import AddTodoItem from "./AddTodoItem";

import { useDispatch } from "react-redux";
import {
  updatePin,
  storageNote,
  trashNote,
} from "../../store/actions/noteActions";
import nextId from "react-id-generator";
import { useLocation } from "react-router-dom";
const TodoCard = ({ note, pinColor }) => {
  const location = useLocation();

  const [work, setWork] = useState([]);
  const dispatch = useDispatch();

  const handleUpdatePin = (idNote) => {
    updatePin(idNote);
    dispatch({
      type: "RELOAD",
      payload: idNote,
    });
  };

  const handleStorage = (idNote) => {
    storageNote(idNote);
    dispatch({
      type: "STORAGE_NOTE",
      payload: idNote,
    });
  };
  const handleTrash = (idNote) => {
    trashNote(idNote);
    dispatch({
      type: "TRASH_NOTE",
      payload: idNote,
    });
  };

  const itemMenu = () => {
    if (location.pathname === "/home") {
      return (
        <Menu.Item key={nextId()} onClick={() => handleStorage(note._id)}>
          Thêm vào lưu trữ
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item key={nextId()} onClick={() => handleStorage(note._id)}>
          Bỏ lưu trữ
        </Menu.Item>
      );
    }
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
                {itemMenu()}

                <Menu.Item key={nextId()} onClick={() => handleTrash(note._id)}>
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
