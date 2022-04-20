import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../styles.scss';

let placesVisited;
let placesWantToVisit;

const Map = () => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    // get updated placesVisited placesWantToGo from store
    placesVisited = useSelector((state) => state.list.placesVisited);
    placesWantToVisit = useSelector((state) => state.list.placesWantToVisit);
  }, []);

  const markerStylesPlacesVisited = ['size:mid', 'color:red'];
  const markerStylesPlacesWantToVisit = ['size:mid', 'color:greem'];

  // function to create markers param for the get request to google maps static api
  const createMarkers = (arrayOfLocations, markerStyles) => {
    let markers = [];
    arrayOfLocations.forEach((location) => {
      markers.push(location.location);
    });
    markers = markerStyles.concat(markers).join('|');
    return markers;
  };

  // function to create map with markers for visited/want to visit locations
  const createMap = (markers) => {
    try {
      axios
        .get('https://maps.googleapis.com/maps/api/staticmap', {
          params: {
            markers: markers,
            key: 'AIzaSyDe0wrLQxDD68cZIPk4ZG4RAnhCj0dS8Qo'
          }
        })
        .then(function (response) {
          return response;
        });
    } catch (err) {
      console.log(err);
    }
  };

  // update local state to initiate page re-render

  const handleMapBtnClick = () => {
    let url;
    // if both placesVisited and placesWantToVisit checkboxes chekced
    if (
      document.getElementById('places-visited-checkbox').checked &&
      document.getElementById('places-want-to-visit-checkbox').checked
    ) {
      const visitedMarkers = createMarkers(
        placesVisited,
        markerStylesPlacesVisited
      );
      const wantToVisitMarkers = createMarkers(
        placesWantToVisit,
        markerStylesPlacesWantToVisit
      );
      const markers =
        visitedMarkers.concat(wantToVisitMarkers) + wantToVisitMarkers;
      url = createMap(markers);
    }
    // if only button to show placesVisited clicked
    else if (document.getElementById('places-visited-checkbox').checked) {
      const markers = createMarkers(placesVisited, markerStylesPlacesVisited);
      url = createMap(markers);
    }
    // if only button to show placesWantToVisited clicked
    else if (document.getElementById('places-want-to-visit-checkbox').checked) {
      const markers = createMarkers(
        placesWantToVisit,
        markerStylesPlacesWantToVisit
      );
      createMap(markers);
      url = createMap(markers);
    }
    // update mapUrl local state and tell Map component to re-render
    setMapUrl(url);
  };

  return (
    <>
      <div className=" input-bar-container">
        <form id="location-form">
          <input
            type="checkbox"
            id="places-visited-checkbox"
            name="places-radio-checkbox-btn"
            value="places-have-been-checkbox"
          />
          <br />
          <input
            type="checkbox"
            id="places-want-to-visit-checkbox"
            name="places-radio-checkbox-btn"
            value="places-want-to-visit-checkbox"
          />
          <br />
          <button type="submit" className="btn" onClick={handleMapBtnClick}>
            Submit
          </button>
        </form>
      </div>
      <div className="map-container">
        <img src={mapUrl} />
      </div>
    </>
  );
};
export default Map;
