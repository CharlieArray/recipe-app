import React from "react";
import styled from 'styled-components';


const Button = styled.button`
  font-size: 12px;
  vertical-align: center;  
  background-color: #ffeaa7;
`

export default class GroceryForm extends React.Component {

  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>

          <input name="grocery" type="text" />
          
          <Button type="submit">Submit</Button>

        </form>
      </>
    );
  }
}
