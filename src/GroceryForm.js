import React from "react";

export default class GroceryForm extends React.Component {

    
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
        <h4>Add new grocery item</h4>

          <input name="grocery" type="text" />
          
          <button type="submit">Submit</button>

        </form>
      </>
    );
  }
}
