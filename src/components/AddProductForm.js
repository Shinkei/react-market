import React from 'react';
import PropTypes from 'prop-types';

class AddProductForm extends React.Component{
  static propTypes = {
    addProduct: PropTypes.func
  }

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  
  createProduct = (event) => {
    event.preventDefault();
    const product = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value),
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value,
    };

    this.props.addProduct(product);

    event.currentTarget.reset();
  }

  render(){
    return (
      <form className="fish-edit" onSubmit={this.createProduct}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name"/>
        <input type="text" name="price" ref={this.priceRef} placeholder="Price"/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea type="text" name="desc" ref={this.descRef} placeholder="Description"/>
        <input type="text" name="image" ref={this.imageRef} placeholder="Image"/>
        <button type="submit">Add Product</button>
      </form>
    );
  }
}

export default AddProductForm;