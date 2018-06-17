import React from 'react';

class BenchMap extends React.Component {

  componentDidMount() {
     const mapOptions = {
       center: { lat: 37.7758, lng: -122.435 }, // this is SF
       zoom: 13
     };
     //no apikey and did not want to upload api key on github
     // this.map = new google.maps.Map(this.mapNode, mapOptions);
   }

  render() {
    return(
      <div id='map-container' ref='map'></div>
    );
  }
}


export default BenchMap;
