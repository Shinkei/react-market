import React from 'react';
import {formatPrice} from '../helpers';

class Product extends React.Component{
  render(){
    const isAvailable = this.props.product.status === 'available';
    return (
      <li className="menu-fish">
        <img src={this.props.product.image} alt={this.props.product.name}/>
        <h3 className="fish-name">
          {this.props.product.name}
          <span className="price">{formatPrice(this.props.product.price)}</span>
        </h3>
        <p>{this.props.product.desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable? "Add To Order" : "Sold Out"}</button>
      </li>
    );
  }
}

export default Product;