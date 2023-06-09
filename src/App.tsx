import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { createHashHistory } from "history";
import Gpt from "./pages/Gpt";
const history = createHashHistory();
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/Home" />} />
        <Route
          path="/Home"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="/Article"
          render={() => {
            return <Article />;
          }}
        />
        <Route
          path="/Gpt"
          render={() => {
            return <Gpt />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
