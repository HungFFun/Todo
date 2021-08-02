import { React, useState, useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Card, Popover } from "antd";
import {
  PushpinTwoTone,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./TodoCard.scss";
import { TodoContext } from "../../contexts/TodoContext";
import ColorCard from "./ColorCard/ColorCard";

const TodoCard = (props) => {
  //load data
  const [note, setNote] = useState(props.note);
  const pinColor = props.pinColor;
  const { updatePin } = useContext(TodoContext);

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
        className="cart-custom"
        style={{ backgroundColor: `${note.color}` }}
        actions={[
          <Popover content={<ColorCard idNote={note._id} />} trigger="hover">
            <SettingOutlined key="setting" />
          </Popover>,

          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div className="item-complete">
          {note.work.map((itemm, index) => {
            return (
              <div
                className={
                  itemm.isCompleted === true
                    ? "complete-true"
                    : "complete-false"
                }
                key={index}
              >
                <TodoItem item={itemm}></TodoItem>
              </div>
            );
          })}
        </div>
        <hr></hr>
        <div className="item-un-complete">
          {note.work.map((itemm, index) => {
            return (
              <div
                className={
                  itemm.isCompleted === true
                    ? "complete-true"
                    : "complete-false"
                }
                key={index}
              >
                <TodoItem item={itemm}></TodoItem>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default TodoCard;
