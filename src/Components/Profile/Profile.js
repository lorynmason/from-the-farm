import React, { Component } from 'react';
import Product from '../Product/Product';
import { Redirect } from 'react-router';
import ProductList from '../ProductList/ProductList'
import farmImage from '../../styles/images/farm.jpeg'

export class Profile extends Component {
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
    const { name, bio, address, phone, email, city, state, id } = this.props.user
    const products = this.props.products.filter((product) => {
      return product.user_id === id;
    });
    let redirect

    if (!name) {
      redirect = <Redirect to="/buy"/>
    } 

    return (
      <section className="profile">
        <h3>{name}</h3>
          <section className="vender-info">
            <div className="img-container">
              <img id="farm" src={farmImage} alt="Farm"/>
            </div>
            <div className="contact-info">
              <h4>{address}</h4>
              <h4>{city}, {state}</h4>
              <h4>{email}</h4>
              <h4>{phone}</h4>
            </div>
          </section>
          <p>{bio}</p>
          <section className="vender-products">
          <ProductList products={products} />
          </section>
        { redirect }
      </section>
    )
  }
}

export default Profile;