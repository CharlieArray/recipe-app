import React from "react";
import styled from 'styled-components'

const Button = styled.button`
  font-size: 12px;
  vertical-align: center;  
`
export default class GroceryResults extends React.Component {
  render() {
    return (
      <>
        <h3>Grocery List Items:</h3>

        {this.props.list.map((item, index) => {
          return (
            <>
              <li key={index}>{item.item} <Button onClick={(e) => this.props.handleDelete(item.id)}>Delete</Button></li>
              
            </>
          );
        })}
      </>
    );
  }
}
