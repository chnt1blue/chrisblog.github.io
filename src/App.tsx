import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Article from "./pages/Article";
import { createHashHistory } from "history";
import { NavigationBar } from "./components";
import About from "./pages/About";
import { ChatGpt, Home } from "./pages";

const history = createHashHistory();
const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
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
              return <ChatGpt />;
            }}
          />
          <Route
            path="/about"
            render={() => {
              return <About />;
            }}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
