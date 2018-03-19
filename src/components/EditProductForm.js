import React from 'react';

class EditProductForm extends React.Component {
  
  handleOnChange = (event) =>{
    const updatedProduct = {
      ...this.props.product,
      // obtain the name of the field that change that is the same of the object
      // this way it works for all the fields
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateProduct(this.props.index, updatedProduct);
  }

  handleDelete = (event) =>{
    this.props.deleteProduct(this.props.index);
  }
  
  render(){
    return (
      <div className="fish-edit">
      <input type="text" name="name" onChange={this.handleOnChange} value={this.props.product.name}/>
      <input type="text" name="price" onChange={this.handleOnChange} value={this.props.product.price}/>
      <select type="text" name="status" onChange={this.handleOnChange} value={this.props.product.status}>
        <option onChange={this.handleOnChange} value="available">Available</option>
        <option onChange={this.handleOnChange} value="unavailable">Sold Out</option>
      </select>
      <textarea type="text" name="desc" onChange={this.handleOnChange} value={this.props.product.desc}/>
      <input type="text" name="image" onChange={this.handleOnChange} value={this.props.product.image}/>
      <button onClick={this.handleDelete}>Remove Product</button>
      </div>
    );
  }
}

export default EditProductForm;
