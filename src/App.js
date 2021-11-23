import { React, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getAccessToken } from "./services/auth.service";
import { createBrowserHistory } from "history";
import { layoutRoutes } from "./router";
import { useAppStore } from "./hooks";

const history = createBrowserHistory();

function App() {
  const [appStore, updateAppStore] = useAppStore();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      updateAppStore((draft) => {
        draft.isLogin = true;
      });
    }
  }, [appStore.isLogin]);

  return (
    <div>
      <div>
        <BrowserRouter history={history}>
          <Switch>
            {appStore.isLogin
              ? layoutRoutes.private.map((prop) => (
                  <Route
                    key={prop.id}
                    path={prop.path}
                    component={prop.component}
                  />
                ))
              : layoutRoutes.public.map((prop) => (
                  <Route
                    key={prop.id}
                    path={prop.path}
                    component={prop.component}
                  />
                ))}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
