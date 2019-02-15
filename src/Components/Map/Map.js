import React, { Component } from 'react';
import accessToken from '../../mapbox-accessToken.js';
import L from 'leaflet';

export class Map extends Component {
  componentDidUpdate() {
    this.createMap();
  }

  createMap = () => {
    const map = L.map('map').setView([39.750614, -104.996775], 11);
    const { vendors, location, user } = this.props;
    let loc
    let marker
    let popup
    if(location.pathname === '/buy') {
      vendors.forEach((vendor) => {
        loc = [vendor.lat, vendor.long]
        marker = L.marker(loc).addTo(map);
        popup = `<h3>${vendor.name}</h3>
                      <p>${vendor.address}</p>
                      <p>${vendor.phone}</p>
                      <p>${vendor.email}</p>`
        marker.bindPopup(popup)
      });
    }
    if(location.pathname === '/profile') {
      loc = [user.lat, user.long]
      marker = L.marker(loc).addTo(map);
      popup = `<h3>${user.name}</h3>
                    <p>${user.address}</p>
                    <p>${user.phone}</p>
                    <p>${user.email}</p>`
      marker.bindPopup(popup)
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken
    }).addTo(map);
  }

  render() {
    return (
      <section id="map"></section>
    )
  }
}

export default Map;