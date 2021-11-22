import { React } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
