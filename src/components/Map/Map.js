import React from 'react'
import accessToken from '../../mapbox-accessToken.js';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const Mapp = ({ vendors, vendorSearchResults }) => {
  const position = [39.750614, -104.996775]
  let vendorsToShow = vendors
  if(vendorSearchResults.length) {
    vendorsToShow = vendors.filter( vendor => {
      return vendorSearchResults.includes(vendor.id) 
    })
  }

  const markers = vendorsToShow.map((vendor) => (
    <Marker position={[vendor.lat, vendor.long]}>
      <Popup>
        <h3>${vendor.name}</h3>
        <p>${vendor.address}</p>
        <p>${vendor.phone}</p>
        <p>${vendor.email}</p>
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
