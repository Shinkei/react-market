import React from 'react';
import {formatPrice} from '../helpers'

class Order extends React.Component{
  renderOrder = key => {
    const product = this.props.products[key];
    const count = this.props.order[key];
    const isAvailable = product && product.status === 'available';
    if(!isAvailable){
      return (
        <li key="key">
          Sorry {product.name} is no longer available
        </li>
      );
    }
    return (
      <li>
        {count} lbs {product.name}
        {formatPrice(count * product.price)}
      </li>
    );
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const product = this.props.products[key];
      const count = this.props.order[key];
      const isAvailable = product && product.status === 'available';
      if(isAvailable){
        return prevTotal + product.price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;