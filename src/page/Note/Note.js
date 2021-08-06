import React, { useContext } from "react";
import TodoCard from "../../components/TodoCard/TodoCard";
import { Row, Col } from "antd";
import { TodoContext } from "../../contexts/TodoContext";
import CreateNote from "../../components/CreateNote/CreateNote";
const Note = () => {
  const { data } = useContext(TodoContext);
  return (
    <div>
      <Row>
        <Col span={24}>
          <CreateNote></CreateNote>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {data.map((item, index) => {
            if (!item.pin) return null;
            return (
              <TodoCard pinColor={"#FFD700"} key={index} note={item}></TodoCard>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {data.map((item, index) => {
            if (item.pin) return null;
            return (
              <TodoCard pinColor={"#D3D3D3"} key={index} note={item}></TodoCard>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Note;
