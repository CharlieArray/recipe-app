import React from "react";

export default class GroceryForm extends React.Component {

    
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>

          <input name="grocery" type="text" />
          
          <button type="submit">Submit</button>

        </form>
      </>
    );
  }
}
