import React, { Component } from 'react';
import accessToken from '../../mapbox-accessToken.js';
import L from 'leaflet';

export class Buy extends Component {

  componentDidMount() {
    const map = L.map('map').setView([39.750614, -104.996775], 18);
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
      <section className="buy">
        <article id="map" style={dimensions}></article>
      </section>
    )
  }
}

export default Buy;
