import React from "react";

export default class GroceryResults extends React.Component {
  render() {
    return (
      <>
        <h3>Grocery List Items:</h3>

        {this.props.list.map((item, index) => {
          return (
              <li key={index}>{item}</li>
          );
        })}
      </>
    );
  }
}
