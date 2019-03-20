import React from 'react'
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Mapp = ({ vendors, vendorSearchResults }) => {
  const position = [39.750614, -104.996775]
  let vendorsToShow = vendors
  if(vendorSearchResults.length) {
    vendorsToShow = vendors.filter( vendor => {
      return vendorSearchResults.includes(vendor.id) 
    })
  }
  const customMarker = L.icon({ iconUrl:('https://www.svgrepo.com/show/7496/carrot.svg'), })
  const markers = vendorsToShow.map((vendor) => (
    <Marker position={[vendor.lat, vendor.long]} icon={customMarker} key={vendor.id}>
      <Popup>
        <h3><Link to={`/profile/${vendor.id}`} >{vendor.name}</Link></h3>
        <p>{vendor.address}</p>
        <p>{vendor.phone}</p>
        <p>{vendor.email}</p>
      </Popup>
    </Marker>
  ));

  return (
    <Map center={position} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {markers}
    </Map>
  )
}

const mapStateToProps = (state) => ({
  vendors: state.vendors,
  vendorSearchResults: state.vendorSearchResults
});

export default connect(mapStateToProps)(Mapp);

Mapp.propTypes = {
  vendors: PropTypes.array,
  vendorSearchResults: PropTypes.array
}
