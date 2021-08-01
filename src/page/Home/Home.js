import React from "react";
import MenuTodo from "../../components/Menu/MenuTodo";
import TodoContextProvider from "../../contexts/TodoContext";
import "./Home.scss";
import { Row, Col } from "antd";
import HeaderTodo from "../../components/Header/HeaderTodo";
import Note from "../Note/Note";

const Home = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <HeaderTodo></HeaderTodo>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <MenuTodo></MenuTodo>
        </Col>
        <Col span={20}>
          <TodoContextProvider>
            <Note></Note>
          </TodoContextProvider>
        </Col>
      </Row>
      ,
    </div>
  );
};

export default Home;
