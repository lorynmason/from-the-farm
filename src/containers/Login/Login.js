import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../thunks/loginUser';
import { Redirect } from 'react-router';

export class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser('https://xpoll-be.herokuapp.com/api/v1/authentication', this.state)
  }

  render() {
    let page;
    if (this.props.user.name) {
      page = <Redirect to='/profile' />
    }

    return (
      <form className="login" onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <input placeholder="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}/>
        <input placeholder="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>        
        <button>Login</button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);