import React from 'react';
import AddProductForm from './AddProductForm';

class Inventory extends React.Component{
  render(){
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddProductForm addProduct={this.props.addProduct}/>
      </div>
    );
  }
}

export default Inventory;