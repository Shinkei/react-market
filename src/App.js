import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Product from './components/Product';
import sampleProducts from './sample-products';
import base from './base';

class App extends Component { 
  state = {
    products: {},
    order: {}
  };

  componentDidMount(){
    this.ref = base.syncState(`${this.props.match.params.storeid}/products`, {context:this, state:'products'});
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addProduct = (product) => {
    const products = {...this.state.products};
    products[`product${Date.now()}`] = product;
    this.setState({products}); // update only the products object
  }

  loadSampleProducts = () => {
    this.setState({products: sampleProducts});
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seefood Market" />
          <ul className="fishes">
            {Object.keys(this.state.products).map(key =>
              <Product
                key={key}
                index={key}
                product={this.state.products[key]}
                addToOrder={this.addToOrder}/>
            )}
          </ul>
        </div>
          <Order products={this.state.products} order={this.state.order}/>
          <Inventory addProduct={this.addProduct} loadSampleProducts={this.loadSampleProducts}/>
      </div>
    );
  }
}

export default App;
