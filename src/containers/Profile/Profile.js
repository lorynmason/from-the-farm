import React from 'react';
import { ProductList } from '../../components/ProductList/ProductList';
import farmImage from '../../styles/images/farm.jpeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Profile = ({ user, vendors, allProducts, location }) => {
  let profile = null
  let profileProducts
  let picture = user.img_url ? user.img_url : farmImage
  let { name, bio, address, phone, email, city, state, products } = user
  if (location.pathname !== 'myprofile') {
    const id = location.pathname.split('/')[2]
    profile = vendors.find(vendor => vendor.id === parseInt(id)) 
    profileProducts = allProducts.filter(products => products.user_id === parseInt(id))
    picture = profile ? profile.img_url : farmImage
  } 
  return (
    <section className="profile">
    <div className="profile-card">
      <h3>{profile ? profile.name : name}</h3>
      <section className="vender-info">
        <div className="img-container">
          <img id="farm" src={picture} alt="Farm"/>
        </div>
        <div className="contact-info">
          <h4>{profile ? profile.address : address}</h4>
          <h4>{profile ? profile.city  : city}, {profile ? profile.state : state}</h4>
          <h4>{profile ? profile.email : email}</h4>
          <h4>{profile ? profile.phone : phone}</h4>
        </div>
      </section>
      <p>{bio} Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. House hen chinchillas in barn livestock cat hogs chicks trucks. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robin.</p>
    </div>
        <section className="vender-products">
          <ProductList products={profile ? profileProducts : products} />
        </section>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user,
  vendors: state.vendors,
  allProducts: state.products,
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
