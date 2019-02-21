import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../styles/images/pig-logo.png'
import { removeUser, isLoading, addMessage } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Header = (props) => {
  const clickBuy = () => {
    props.isLoading(true)
    setTimeout(() => {
      props.isLoading(false)
    }, 1000);
  }

  const signout = () => {
    props.removeUser();
    props.addMessage('You are now signed-out');
  }

  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <h1>from<span>the</span>farm</h1>
          <img id="logo" src={image} alt="from the farm cute pig logo"/>
          <p>menu<i className="fas fa-caret-right"></i></p>
          <div className="menu">
            <Link to="/buy" onClick={clickBuy}><i className="fas fa-carrot"><p>buy</p></i></Link>
            <Link to="/profile"><i className="fas fa-user-circle"><p>my profile</p></i></Link>
            <Link to="/add-product"><i className="fas fa-plus-circle"><p>inventory</p></i> </Link>
            <Link to="/" onClick={signout}><i className="fas fa-sign-out-alt"><p>sign out</p></i></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
  addMessage: (message) => dispatch(addMessage(message)),
  isLoading: (bool) => dispatch(isLoading(bool))
});

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  removeUser: PropTypes.func,
  addMessage: PropTypes.func,
  isLoading: PropTypes.func
}
