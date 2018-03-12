import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

class App extends Component { 
  state = {
    products: {},
    order: {}
  };

  addProduct = (product) => {
    const products = {...this.state.products};
    products[`product${Date.now()}`] = product;
    this.setState({products});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seefood Market" />
        </div>
          <Order/>
          <Inventory addProduct={this.addProduct}/>
        {/* <StorePicker /> */}
      </div>
    );
  }
}

export default App;
