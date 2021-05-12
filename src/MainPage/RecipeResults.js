import React, { Component } from "react";

export default class RecipeResults extends Component {
  render() {
    return (
      <>
        <h4>Recipe Ideas:</h4>
        {this.props.recipes.map((recipe, index) => {
          return (
              <>
                <li key={index}>{recipe.title}</li>
              </>
          );
        })}
      </>
    );
  }
}
