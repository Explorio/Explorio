import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/core/icons/LocationOnOutlined';

import '../styles.scss';

import useStyles from './styles.js';

// AIzaSyDe0wrLQxDD68cZIPk4ZG4RAnhCj0dS8Qo

const Map = () => {

  const classes = useStyles();
  
  // function to get the coordinates of an inputed location 
  const geocode = () => {
  
    const location = document.getElementById(‘’).value;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: ‘AIzaSyDe0wrLQxDD68cZIPk4ZG4RAnhCj0dS8Qo’
        }
    })
    .then(function (response) {
        console.log(response)
        const formattedAddress = response.data.results[0].formatted_address;
        const { lat, lng } = response.data.results[0].geometry.location;
    })
        .catch(function (error) {
            console.log(error);
        }
    )
};

return (
      
  <div class=“container”>
    <form id=“location-form”>
        <input type=“text” id=“location-input” class=“form-control” />
        <br>
            <button type=“submit” class=“btn”>Submit</button>
    </form>
</div >
  
      <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                    >
            </GoogleMapReact>
      </div>
    );
}



// const key = ‘AIzaSyDe0wrLQxDD68cZIPk4ZG4RAnhCj0dS8Qo’;
// const location = addressInput.split(' ‘).join(‘+’);
// const request = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;



// control flow logic:
// check radio button: places i've been or places i want to go
// submit location input
// make get request to get coordinates of that input from geocode
// make post request to add location input and/or coordinate to user’s database
// update state and add pin on map