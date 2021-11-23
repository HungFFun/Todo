import { Row, Col } from "antd";

import React from "react";
import { Switch, Route } from "react-router-dom";

import { routesUIGuide } from "../../../router/UIGuide/router";
import HeaderTodo from "../../../components/Header";
import MenuTodo from "../../../components/Menu";

const index = () => {
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
          <Switch>
            {routesUIGuide.map((prop, key) => (
              <Route
                path={prop.path}
                exact
                component={prop.component}
                key={key}
              />
            ))}
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default index;
