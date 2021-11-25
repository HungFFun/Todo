import { Row, Col } from "antd";

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { routesUIGuide } from "../../../router/UIGuide/router";
import HeaderTodo from "../../../components/Header";
import MenuTodo from "../../../components/Menu";

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onHandleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <HeaderTodo onHandleCollapsed={onHandleCollapsed}></HeaderTodo>
        </Col>
      </Row>
      <Row>
        <Col flex="none">
          <MenuTodo collapsed={collapsed}></MenuTodo>
        </Col>
        <Col flex="auto" style={{ paddingLeft: "10px" }}>
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

export default Index;
