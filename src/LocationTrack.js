// Another link for README.md
import React, {useState, useEffect} from "react";

function LocationTrack() {
 const [city, setCity] = useState('')

 useEffect(() => {
  console.log("getLocation Called");
  var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"
  navigator.geolocation.getCurrentPosition(
    (position) => {
      bdcApi = bdcApi
      + "?latitude=" + position.coords.latitude
      + "&longitude=" + position.coords.longitude
      + "&localityLanguage=en";
      // For diffrent location
      // bdcApi = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=12.311827&longitude=76.652985&localityLanguage=en'
      // bdcApi = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=19.21833&longitude=72.978088&localityLanguage=en'
      // bdcApi = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=30.741482&longitude=76.768066&localityLanguage=en'
      // + "?latitude=" + position.coords.latitude
      // + "&longitude=" + position.coords.longitude
      // + "&localityLanguage=en";
      // console.log("bdcApi",bdcApi)
            
  fetch(bdcApi)
    .then(results => results.json()
    .then(data => {
      console.log('d',data)
      // For city 
      // console.log('d',data.localityInfo.administrative[2].name)
    setCity(data.locality);
     }),
  )})
}, []);

   console.log('city',city)
   return(
      <React.Fragment>
          <h3>User track location </h3>
          <button >Take the Shott!</button>
          <h5>City {city}</h5>
      </React.Fragment>
      );
}

export default LocationTrack




// TODO Trial 1 right paid api Google geocoder 'maps' 
// TODO Trail 1
// import React from "react";

// class LocationTrack extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//       };
//   }

//   componentDidMount() {
//     this.getLocation()
//   }

//   getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(this.getReverseGeocodingData);
//   } else {
//       document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
//   }
//   }

//   getReverseGeocodingData = (position) => {
//     var latlng = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//     // This is making the Geocode request
//     var geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//         if (status !== window.google.maps.GeocoderStatus.OK) {
//             alert(status);
//         }
//         // This is checking to see if the Geoeode Status is OK before proceeding
//         if (status === window.google.maps.GeocoderStatus.OK) {
//             console.log(results);
//             var address = (results[0].formatted_address);
//         }
//     });
//   }
//   render() {
//       return (
//           <div>
//             <p>Click the button to get your coordinates.</p>

//             <button onClick={this.getLocation}>Try It</button>

//             <p id="demo"></p>
            
//               {/* <i className="fa fa-map-marker" onClick={this.getLocation}></i>
//               <span className="pin-number" id="demo"></span> */}

//           </div>
//       );
//   }
// }
// export default LocationTrack;




