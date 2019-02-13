import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
      <h1>from<span>the</span>farm</h1>
      <img id="logo" src="https://www.shareicon.net/data/2016/06/18/596437_pig_512x512.png" alt="from the farm cute pig logo"/>
      <Link to="/profile"><i className="fas fa-bacon"></i></Link>
    </header>
  )
}