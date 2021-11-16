import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import { createBrowserHistory } from "history";
function App() {
  const history = createBrowserHistory();
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route exact path="/register" component={Register}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
