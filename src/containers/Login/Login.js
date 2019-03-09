import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../thunks/loginUser';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      account_type: "vendor",  
      address: '',
      city: '',
      state: '',
      phone: '',
      zip: '',
      img_url: '',
      newUser: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.loginUser('https://xpoll-be.herokuapp.com/api/v1/authentication', { email, 
    password })
  }

  handleNewUser = () => {
    this.setState({
      newUser: !this.state.newUser
    })
  }

  handleSignup = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.loginUser('https://xpoll-be.herokuapp.com/api/v1/authentication', { email, 
    password })
  }

  render() {
    let page;
    if (this.props.user.name) {
      page = <Redirect to='/profile' />
    }
    if (this.state.newUser) {
      return (
        <form className="login signup" onChange={this.handleChange} onSubmit={this.handleSignup}>
          <h3>Sign Up</h3>
          <input placeholder="Company Name" name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
          <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}/>
          <input placeholder="Adress" name="adress" type="text" onChange={this.handleChange} value={this.state.address}/>
          <input placeholder="City" name="city" type="text" onChange={this.handleChange} value={this.state.city}/>
          <input placeholder="State" name="state" type="text" onChange={this.handleChange} value={this.state.state}/>
          <input placeholder="Zip Code" name="zip" type="text" onChange={this.handleChange} value={this.state.zip}/>
          <input placeholder="Phone Number" name="phone" type="text" onChange={this.handleChange} value={this.state.phone}/>
          <input placeholder="Company Bio" name="bio" type="text" onChange={this.handleChange} value={this.state.bio}/>
          <input placeholder="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
          <input placeholder="Confirm Password" name="password_confirmation" type="password" onChange={this.handleChange} value={this.state.confirmPassword}/>        
          <button>Sign Up</button>
          <p className="create-account" onClick={this.handleNewUser}>
            Login as existing user
          </p>
          {page}
        </form>
      )
    }

    return (
      <form className="login" onChange={this.handleChange} onSubmit={this.handleLogin}>
        <h3>Login</h3>
        <input placeholder="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}/>
        <input placeholder="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>        
        <button>Login</button>
        <p className="create-account" onClick={this.handleNewUser}>
          Click here to create an account
        </p>
        {page}
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (url, state) => dispatch(loginUser(url, state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  user: PropTypes.object,
  loginUser: PropTypes.func
}
