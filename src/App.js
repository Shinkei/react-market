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
    const localStorageRef = localStorage.getItem(this.props.match.params.storeid);
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${this.props.match.params.storeid}/products`, {context:this, state:'products'});
  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeid, JSON.stringify(this.state.order));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addProduct = (product) => {
    const products = {...this.state.products};
    products[`product${Date.now()}`] = product;
    this.setState({products}); // update only the products object
  }

  updateProduct = (key, product) => {
    const products = {...this.state.products};
    products[key] = product;
    this.setState({products});
  }

  deleteProduct = key => {
    const products = {...this.state.products};
    products[key] = null;
    this.setState({products});
  }

  loadSampleProducts = () => {
    this.setState({products: sampleProducts});
  }
  
  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }
  
  deleteFromOrder = key => {
    const order = {...this.state.order};
    delete order[key];
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
          <Order products={this.state.products} order={this.state.order} deleteFromOrder={this.deleteFromOrder}/>
          <Inventory 
            addProduct={this.addProduct}
            loadSampleProducts={this.loadSampleProducts}
            products={this.state.products}
            updateProduct={this.updateProduct}
            deleteProduct={this.deleteProduct}
            storeId={this.props.match.params.storeid}
          />
      </div>
    );
  }
}

export default App;
