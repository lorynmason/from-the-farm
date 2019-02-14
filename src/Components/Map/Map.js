import React, { Component } from 'react';
import accessToken from '../../mapbox-accessToken.js';
import L from 'leaflet';

export class Map extends Component {
  // componentDidMount() {
  //   this.createMap();
  // }

  componentDidUpdate() {
    this.createMap();
  }

  createMap = () => {
    const map = L.map('map').setView([39.750614, -104.996775], 11);
    const { vendors } = this.props;
    vendors.forEach((vendor) => {
      const location = [vendor.lat, vendor.long]
      const marker = L.marker(location).addTo(map);
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
    return (
      <section id="map"></section>
    )
  }
}

export default Map;