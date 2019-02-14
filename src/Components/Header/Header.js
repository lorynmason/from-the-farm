import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../styles/images/pig-logo.png'


export const Header = () => {
  return (
    <header>
      <Link to="/profile"><i className="fas fa-bacon"></i></Link>
      <div className="header-logo">
        <h1>from<span>the</span>farm</h1>
        <img id="logo" src={image} alt="from the farm cute pig logo"/>
      </div>
    </header>
  )
}