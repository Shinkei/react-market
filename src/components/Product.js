import React from 'react';
import {formatPrice} from '../helpers';

class Product extends React.Component{
  render(){
    return (
      <li className="menu-fish">
        <img src={this.props.product.image} alt={this.props.product.name}/>
        <h3 className="fish-name">
          {this.props.product.name}
          <span className="price">{formatPrice(this.props.product.price)}</span>
        </h3>
        <p>{this.props.product.desc}</p>
        <button>Add To Cart</button>
      </li>
    );
  }
}

export default Product;