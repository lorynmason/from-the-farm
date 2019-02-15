import React, { Component } from 'react';
import Product from '../Product/Product';
import Map from '../Map/Map';

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

  render(){
    const { showBio } = this.state
    const { name, bio, address, phone, email, city, state } = this.props.user
    let info
    let button
    if (showBio) {
      button = 'Show Products'
      info = <p>{bio}</p>;
    } else {
      button = 'Show Bio';
      info = this.props.products.map((product) => {
        return <Product product={product} />
      })
    }
    return (
      <section className="profile">
        {/* <Map user={this.props.user} location={this.props.location}/> */}
        <h3>{name}</h3>
        <h4>{address}</h4>
        <h4>{city}, {state}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <button onClick={this.toggleInfo}>{ button }</button>
        { info }
      </section>
    )
  }
}

export default Profile;