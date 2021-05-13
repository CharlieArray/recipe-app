import React, { Component } from "react";
import GroceryForm from "../MainPage/GroceryForm";
import GroceryResults from "../MainPage/GroceryResults";
import RecipeResults from "../MainPage/RecipeResults";
import grocery_cart_small from "../images/grocery_cart_small.jpg";


export default class GroceryMain extends Component {
  render() {
    return (
      <>
        <h1>Grocery Cart🥕</h1>
        <h2>Add grocery items, <br /> create recipe ideas!</h2>
        <div>
          <img src={grocery_cart_small} width="30%" alt="grocery logo" />
        </div>

        <GroceryForm
          handleSubmit={this.props.handleSubmit}
          list={this.props.list}
        />
        <GroceryResults
          list={this.props.list}
          handleDelete={this.props.handleDelete}
        />
        <RecipeResults recipes={this.props.recipes} />
      </>
    );
  }
}
