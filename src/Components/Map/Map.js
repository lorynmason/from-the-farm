import React, { Component } from 'react';
import accessToken from '../../mapbox-accessToken.js';
import L from 'leaflet';

export class Map extends Component {

  componentDidMount() {
    this.createMap();
  }

  createMap = () => {
    const map = L.map('map').setView([39.750614, -104.996775], 9);
    const { coordinates } = this.props;

    coordinates.forEach((location) => {
      console.log(location)
      const marker = L.marker(location).addTo(map);
      marker.bindPopup(`<h4>${location}</h4>`)
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken
    }).addTo(map);
  }

  render() {
    const dimensions = {
      height: '400px',
      width: '400px'
    }
    return (
      <section id="map" style={dimensions}></section>
    )
  }
}

export default Map;