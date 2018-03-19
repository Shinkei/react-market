import React from 'react';
import PropTypes from 'prop-types';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

class Inventory extends React.Component{
  static propTypes = {
    products: PropTypes.object,
    updateProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    addProduct: PropTypes.func,
    loadSampleProducts: PropTypes.func
  }

  render(){
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.products).map(key => (<EditProductForm
          key={key}
          index={key}
          product={this.props.products[key]}
          updateProduct={this.props.updateProduct}
          deleteProduct={this.props.deleteProduct}/>)
          )}
        <AddProductForm addProduct={this.props.addProduct}/>
        <button onClick={this.props.loadSampleProducts}>Load Sample Products</button>
      </div>
    );
  }
}

export default Inventory;