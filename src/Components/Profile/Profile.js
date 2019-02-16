import React, { Component } from 'react';
import Product from '../Product/Product';
import { Redirect } from 'react-router'

class Profile extends Component {
  constructor(){
    super()
    this.state = {
      showBio: true
    }
  }

  toggleInfo = () => {
    const { showBio } = this.state
    this.setState({
      showBio: !showBio
    })
  }

  render() {
    const { showBio } = this.state
    const { name, bio, address, phone, email, city, state } = this.props.user
    let info
    let button
    let redirect
    
    if (showBio) {
      button = 'Show Products'
      info = <p>{bio}</p>;
    } else {
      button = 'Show Bio';
      info = this.props.products.map((product) => {
        return <Product product={product} />
      })
    }

    if (!name) {
      redirect = <Redirect to="/buy"/>
    } 

    return (
      <section className="profile">
        <h3>{name}</h3>
        <h4>{address}</h4>
        <h4>{city}, {state}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <button onClick={this.toggleInfo}>{ button }</button>
        { info }
        { redirect }
      </section>
    )
  }
}

export default Profile;