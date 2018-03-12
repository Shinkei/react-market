import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
  myInput = React.createRef();

  /* this is the way to bind the method to the object
   * there you create an attribute that is binded by default
   * and assign it a function, so it is not necessary to bind
   * the function in the constructor
   * */
  goToStore = (event) => {
    event.preventDefault();
    this.props.history.push(`/store/${this.myInput.value.value}`);;
  }

  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A StorePicker</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;