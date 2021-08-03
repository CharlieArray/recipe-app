import "./App.css";
import React from "react";
import styled from "styled-components";
import GroceryMain from "./MainPage/GroceryMain";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AccountBox } from "./LoginPage/index";

const AppContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>

        {/*Login/ Signup*/}
        <Switch>
          <Route exact path="/">
            <AppContainer>
              <AccountBox />
            </AppContainer>
          </Route>
        </Switch>

        <div className="App">
            {/*Grocery Page*/}
            <Switch>
              <Route path="/main">
                <GroceryMain />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}
