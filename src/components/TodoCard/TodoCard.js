import { React, useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Card, Popover } from "antd";
import {
  PushpinTwoTone,
  EllipsisOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import "./TodoCard.scss";
import { TodoContext } from "../../contexts/TodoContext";
import ColorCard from "./ColorCard/ColorCard";

const TodoCard = (props) => {
  //load data
  const note = props.note;
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
            <BgColorsOutlined key="setting" />
          </Popover>,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div className="item-complete">
          <TodoItem item={note.work}></TodoItem>
        </div>
        <hr></hr>
        <div className="item-un-complete">
          <TodoItem item={note.work}></TodoItem>
        </div>
      </Card>
    </div>
  );
};

export default TodoCard;
