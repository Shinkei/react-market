import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


class Order extends React.Component{
  static propTypes = {
    products: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func
  }
  renderOrder = key => {
    const product = this.props.products[key];
    const count = this.props.order[key];
    const isAvailable = product && product.status === 'available';
    if(!product){
      return null;
    }
    if(!isAvailable){
      return (
        <li key={key}>
          Sorry {product.name} is no longer available
        </li>
      );
    }
    return (
      <CSSTransition classNames="order" key={key} timeout={{enter:500, exit:500}}>
        <li key={key}>
        <span>
          <TransitionGroup component="span" className="count">
            <CSSTransition classNames="count" key={count} timeout={{enter:500, exit:500}}>
              <span>{count}</span>
            </CSSTransition>
          </TransitionGroup>
          lbs {product.name}
          {formatPrice(count * product.price)}
          <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
        </span>
        </li>
      </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;