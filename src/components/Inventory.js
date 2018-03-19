import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';
import Login from './Login';
import base, {firebaseApp} from '../base';

class Inventory extends React.Component{
  static propTypes = {
    products: PropTypes.object,
    updateProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    addProduct: PropTypes.func,
    loadSampleProducts: PropTypes.func
  }

  state = {
    uid:null,
    awner:null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.authHandler({user});
      }
    });
  }

  authHandler = async (authData) =>{
    const store = await base.fetch(this.props.storeId, {context: this});
    if(!store.owner){
      console.log(authData);
      await base.post(`${this.props.storeId}/owner`, {data: authData.uid});
    }

    this.setState({
      uid: authData.uid,
      owner: store.owner || authData.uid
    });
  }

  logout = async () =>{
    await firebase.auth().signOut();
    this.setState({uid:null});
  }

  authenticate = (email, password) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(this.authHandler)
      .catch(() => alert('authentication error'));
  }

  render(){
    const logout = <button onClick={this.logout}>Log Out</button>

    if(!this.state.uid){
      return <Login authenticate={this.authenticate}/>
    }

    if(this.state.uid !== this.state.owner){
      return (
        <div>
            <p>Sorry you are not the owner</p>
            {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
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