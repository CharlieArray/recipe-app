import React, { Component } from "react";
import GroceryForm from "../MainPage/GroceryForm";
import GroceryResults from "../MainPage/GroceryResults";
import RecipeResults from "../MainPage/RecipeResults";
import grocery_cart_small from "../images/grocery_cart_small.jpg";
import ItemService from '../services/Item-Service';


export default class GroceryMain extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      recipes: [],
    };
  }

  componentDidMount(){
    this.getGroceryList()
  }

  getData = (items = this.state.list) => {
    return ItemService.getRecipes(items)
      .then((data) => this.setState({ recipes: data }))
      .catch(console.error);
  };


  //fetch data from SQL database server and setState
  getGroceryList = () => {
    ItemService.getItems()
    .then(items => {
      this.setState({
        list: items
      })
      this.getData(items)
    })
  };

  //Submit handler function to get users grocery list
  handleSubmit = (event) => {
    event.preventDefault();
    return ItemService.createItem(event.target.grocery.value)
    .then( () => {
     return this.getGroceryList()})
  };

  //Submit handler to delete item from users grocery list and update state with getGroceryList()
  handleDelete = (id) => {
    ItemService.deleteItem(id)
    .then( () => {
      return this.getGroceryList()})
  };


  render() {
    return (
      <>
        <h1>Grocery Cart🥕</h1>
        <h2>Add grocery items, <br /> create recipe ideas!</h2>
        <div><img src={grocery_cart_small} width="30%" alt="grocery logo" /> </div>

        <GroceryForm
          handleSubmit={this.handleSubmit}
          list={this.state.list}
        />
        <GroceryResults
          list={this.state.list}
          handleDelete={this.handleDelete}
        />
        <RecipeResults recipes={this.state.recipes} />
      </>
    );
  }
}
