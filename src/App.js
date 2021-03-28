import "./App.css";
import React from "react";
import GroceryMain from "./GroceryMain";
import config from './config'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['beans'], 
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

  //fetch data from database server
   getGroceryList = () => {

   }


  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      list: this.state.list.concat(event.target.grocery.value)
    })
    console.log(this.state.list)
    this.getData(event.target.grocery.value)
  }

  handleDelete = (event) => {
    event.preventDefault()
    console.log('deleted')
    this.setState({
      list: this.state.list.filter(function(items){
        return items !== event.target.value
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is Recipe App</h1>
          <GroceryMain 
          handleSubmit={this.handleSubmit}
          handleDelete = {this.handleDelete}
          list={this.state.list}
          recipes={this.state.recipes}
          />
          
        </header>
      </div>
    );
  }
}
