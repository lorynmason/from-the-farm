import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendSearch = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form className="login" onChange={this.handleChange}>
        <h3>Login</h3>
        <input placeholder="username" name="username"/>
        <input placeholder="password" name="password"/>        
        <button>Search</button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);