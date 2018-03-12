import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
// import StorePicker from './components/store-picker';

class App extends Component { 
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seefood Market" />
        </div>
          <Order/>
          <Inventory/>
        {/* <StorePicker /> */}
      </div>
    );
  }
}

export default App;
