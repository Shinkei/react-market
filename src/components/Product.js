import React from 'react';
import {formatPrice} from '../helpers';
import PropTypes from 'prop-types';

class Product extends React.Component{
  static propTypes = {
    addToOrder: PropTypes.func,
    product: PropTypes.shape({
      status: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string
    })
  };

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