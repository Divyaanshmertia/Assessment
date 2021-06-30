import React from "react";
import ShowCards from "./components/ShowCards";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Comment from "./components/Comment";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path={"/"} exact>
              <ShowCards />
            </Route>
            <Route path={"/:id"}>
              <Comment />
            </Route>
          </Switch>
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
