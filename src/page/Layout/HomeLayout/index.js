import React from "react";
import { Route } from "react-router";
function getRoutes(arrRoute) {
  return arrRoute.map((prop, key) => {
    <Route path={prop.path} exact component={prop.component} key={key} />;
  });
}
const index = () => {
  return <div></div>;
};

export default index;
