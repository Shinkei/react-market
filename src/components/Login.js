import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component{
  static propTypes = {
    authenticate: PropTypes.func.isRequired
  }
  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleLogin = (event) =>{
    event.preventDefault();
    this.props.authenticate(this.emailRef.value.value, this.passwordRef.value.value);
  }


  render(){
    return (
      <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your inventory</p>
        <form onSubmit={this.handleLogin}>
          <input type="email" placeholder="email" onChange={this.handleEmailOnChange} ref={this.emailRef}/>
          <input type="password" onChange={this.handlePasswordOnChange} ref={this.passwordRef}/>
          <button className="github" type="submit">Login</button>
        </form>
      </nav>
    );
  }
}

export default Login;