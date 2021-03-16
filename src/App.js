import "./App.css";
import React from "react";
import GroceryMain from "./GroceryMain";
import config from './config'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [], 
      recipes: [],
    }
  }
  
  stringCombined = (list) => { 
    return( 
        `?ingredients=${list}&number=8&ranking=1&ignorePantry=true`
    )
 }

  getData = (list) => {
    fetch(
      `${config.API_ENDPOINT}/${this.stringCombined(list)}`,
      {
        method: "get",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key":
            "f4d8f1ff35mshfad7c63de12d1a3p1c6153jsn7fcd7cc30aeb",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => this.setState({recipes:data}))
      .catch(console.error);
  };



  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      list: this.state.list.concat(event.target.grocery.value)
    })
    this.getData(event.target.grocery.value)
  }

  render() {
    console.log(this.state.recipes)
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is Recipe App</h1>
          <GroceryMain 
          handleSubmit={this.handleSubmit}
          list={this.state.list}
          recipes={this.state.recipes}
          />
          
        </header>
      </div>
    );
  }
}
