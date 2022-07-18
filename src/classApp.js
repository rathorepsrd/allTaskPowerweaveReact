// my trail worked
import React from "react";

class UserLocation extends React.Component{
  constructor(props) {
  super(props);
  this.state={city: ''}
  this.getLocation = this.getLocation.bind(this);
  };

  getLocation = () => {
      let Http = new XMLHttpRequest();
      console.log("getLocation Called");
      var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"

      navigator.geolocation.getCurrentPosition(
          (position) => {
              bdcApi = bdcApi
                  + "?latitude=" + position.coords.latitude
                  + "&longitude=" + position.coords.longitude
                  + "&localityLanguage=en";

          Http.open("GET", bdcApi);
          Http.send();
          Http.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  const str = JSON.parse(this.responseText);
                  console.log('locality',str)
                  console.log('locality',str.locality)
                  this.setState({city: str.locality})
              }
          };
          },
          (err) => { },
          {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
          });
  }
  render(){
   return(
      <React.Fragment>
          <h3>User track location </h3>
          <button onClick={this.getLocation}>Take the Shott!</button>
          <h5>{this.state.city}</h5>
      </React.Fragment>
      )
  }
}
ReactDOM.render(
  <UserLocation />,
  document.getElementById('user-Location')
);



// Trail but not correct
// import React, { Component } from "react";

// export default class classApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }
//     componentDidMount() {
//     };
//     let map;
//     getLocation = () => {
//         map= google.maps.Map;
//         map = new google.maps.Map(document.getElementById("demo").innerHTML , {
//             center: { lat: 22.7496, lng: 75.8899 },
//             zoom: 8,
//           }); 
//     }
//     render() {
//         return (
//             <div>
//                 <p>Click the button to get your coordinates.</p>

//                 <button onClick={this.getLocation}>Try It</button>

//                 <p id="demo"></p>

//             </div>
//         );
//     }
// }