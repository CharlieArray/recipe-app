import "./App.css";
import React from "react";
import styled from 'styled-components'
import GroceryMain from "./MainPage/GroceryMain";
import config from "./config";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { AccountBox } from './LoginPage/index'

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
  constructor(props) {
    super(props);

    this.state = {
      list: ["beans"],
      recipes: [],
    };
  }

  stringCombined = (list) => {
    return `?ingredients=${list}&number=8&ranking=1&ignorePantry=true`;
  };

  getData = (list) => {
    fetch(`${config.API_ENDPOINT}/${this.stringCombined(list)}`, {
      method: "get",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "f4d8f1ff35mshfad7c63de12d1a3p1c6153jsn7fcd7cc30aeb",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ recipes: data }))
      .catch(console.error);
  };

  //fetch data from SQL database server
  getGroceryList = () => {};

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      list: this.state.list.concat(event.target.grocery.value),
    });
    console.log(this.state.list);
    this.getData(event.target.grocery.value);
  };

  handleDelete = (event) => {
    event.preventDefault();
    console.log("deleted");
    this.setState({
      list: this.state.list.filter(function (items) {
        return items !== event.target.value;
      }),
    });
  };

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
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            list={this.state.list}
            recipes={this.state.recipes}
          />
         </Route>

        </header>
      </div>  
      </Switch>
    </Router>
    );
  }
}
