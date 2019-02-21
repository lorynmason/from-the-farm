import React, { Component } from 'react';
import { ProductList } from '../../components/ProductList/ProductList';
import farmImage from '../../styles/images/farm.jpeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Profile extends Component {

  render() {
    const { name, bio, address, phone, email, city, state, products } = this.props.user 
    
    return (
      <section className="profile">
      <div className="profile-card">
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
        <p>{bio}Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. House hen chinchillas in barn livestock cat hogs chicks trucks. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robin.</p>
      </div>
          <section className="vender-products">
            <ProductList products={products} />
          </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    products: PropTypes.array
  })
}
