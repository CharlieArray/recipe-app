import React, { Component } from "react";
import GroceryForm from "./GroceryForm";
import GroceryResults from "./GroceryResults";
import RecipeResults from "./RecipeResults";

export default class GroceryMain extends Component {
    

  render() {
    return (
      <>
        <GroceryForm 
        handleSubmit={this.props.handleSubmit} 
        list={this.props.list}
        />
        <GroceryResults 
        list={this.props.list} 
        handleDelete = {this.props.handleDelete}
        />
        <RecipeResults recipes={this.props.recipes} />
      </>
    );
  }
}
