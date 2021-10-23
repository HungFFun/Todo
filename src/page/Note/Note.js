import React, { useEffect } from "react";
import TodoCard from "../../components/TodoCard/TodoCard";
import { Row, Col } from "antd";
import CreateNote from "../../components/CreateNote/CreateNote";

import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/actions/todoActions";

const Note = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col span={24}>
          <CreateNote></CreateNote>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {todos?.map((item, index) => {
            if (item.pin === true) return null;
            return (
              <TodoCard pinColor={"#FFD700"} key={index} note={item}></TodoCard>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {todos?.map((item, index) => {
            if (item.pin === false) return null;
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
