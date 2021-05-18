import "./App.css";
import React from "react";
import styled from 'styled-components'
import GroceryMain from "./MainPage/GroceryMain";
import config from "./config";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { AccountBox } from './LoginPage/index'
import ItemService from './services/Item-Service'

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
      <Switch>
        <Route exact path ="/">
            <AppContainer>
              <AccountBox/>
            </AppContainer>
          </Route>

      <div className="App">
        <header className="App-main">
    
        <Route path ="/main">
          <GroceryMain
            // handleSubmit={this.handleSubmit}
            // handleDelete={this.handleDelete}
            // list={this.state.list}
            // recipes={this.state.recipes}
          />
         </Route>

        </header>
      </div>  
      </Switch>
    </Router>
    );
  }
}
