import React, { Component } from 'react';
import accessToken from '../../mapbox-accessToken.js';
import L from 'leaflet';
import { connect } from 'react-redux';

export class Map extends Component {
  componentDidUpdate() {
    this.createMap();
  }

  createMap = () => {
    const container = L.DomUtil.get('map');

    if (container !== null) {
      container._leaflet_id = null;
    }

    const map = L.map('map').setView([39.750614, -104.996775], 11);
    const { vendors, vendorSearchResults } = this.props;
    let vendorsToShow = vendors
    if(vendorSearchResults.length) {
      vendorsToShow = vendors.filter( vendor => {
        return vendorSearchResults.includes(vendor.id) 
      })
    }
    vendorsToShow.forEach((vendor) => {
      const loc = [vendor.lat, vendor.long]
      const marker = L.marker(loc).addTo(map);
      const popup = `<h3>${vendor.name}</h3>
      <p>${vendor.address}</p>
      <p>${vendor.phone}</p>
      <p>${vendor.email}</p>`
      marker.bindPopup(popup)
    });


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken
    }).addTo(map);
  }

  render() {
    // this.props.history.listen((location, action) => {
    //   if (location.pathname === '/buy') {
    //     this.createMap();
    //   }
    // });

    return (
      <section id="map"></section>
    );
  }
}

const mapStateToProps = (state) => ({
  vendors: state.vendors,
  vendorSearchResults: state.vendorSearchResults
});

export default connect(mapStateToProps)(Map);