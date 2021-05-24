import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import GroceryMain from '../MainPage/GroceryMain'
import GroceryForm from '../MainPage/GroceryForm'

//App/Login Page Smoke Test
it('App renders without crashing', () => {
  //creates a DOM element to render the component into
  const div = document.createElement('div');

  // renders the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);

  // cleanup code
  ReactDOM.unmountComponentAtNode(div);
});

//Grocery MainPage Smoke Test
it('GroceryMain Page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<GroceryMain/> , div)
})

//GroceryForm Smoke Test
it('GroceryForm Page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<GroceryForm/> , div)
})



