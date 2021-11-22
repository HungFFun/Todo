import React from "react";
import MenuTodo from "../../components/Menu";
import "./style.scss";
import { Row, Col } from "antd";
import HeaderTodo from "../../components/Header";
import Note from "../Note";
import Trash from "../Trash";
import Storage from "../Storage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Router>
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
            <Switch>
              <Route path="/home">
                <Note />
              </Route>
              <Route path="/Storage">
                <Storage />
              </Route>
              <Route path="/Trash">
                <Trash />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
};

export default Home;
