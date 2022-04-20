import { Divider } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateVisitedCoordinatesActionCreator,
  updateWantToVisitCoordinatesActionCreator
} from '/actions.js';

const InputBar = () => {
  const distpatch = useDispatch;
  const placresVisitedDispatcher = (placesVisitedArray) =>
    dispatch(updatePlacesVisitedActionCreator);
  const placesWantToVisitDispatcher = (placesWantToVisitArray) =>
    dispatch(updatePlacesWantToVisitActionCreator);

  useEffect(() => {
    // get username from store upon page render
    const userId = useSelector((state) => state.list.currentUserId);
    const username = useSelector((state) => state.list.currentUsername);
  }, []);

  // function to get the coordinates of an inputed location
  const geocode = async () => {
    try {
      const location = document.getElementById('').value;
      axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: location,
            key: 'AIzaSyDe0wrLQxDD68cZIPk4ZG4RAnhCj0dS8Qo'
          }
        })
        .then(function (response) {
          console.log(response);
          const formattedAddress = response.data.results[0].formatted_address;
          const { lat, lng } = response.data.results[0].geometry.location;
          return { formattedAddress: formattedAddress, lat: lat, lng: lng };
        });
    } catch (err) {
      console.log(err);
    }
  };

  // function to handle when location input submit button is clicked
  // will update store with new location
  const handleLocationInputClick = async (
    placesVisitedDispatcher,
    placesWantToVisitDispatcher
  ) => {
    // check which radio button was clicked
    let placesVisitedBoolean;
    if (document.getElementById('places-visited').checked) {
      placesVisitedBoolean = true;
    } else if (document.getElementById('places-want-to-visit').checked) {
      placesVisitedBoolean = false;
    }

    try {
      // get the coordinates for the location
      const locationObj = geocode();
      const { formattedAddress, lat, lng } = locationObj;

      const config = {
        url: '/postCountries',
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        data: {
          username: username,
          userId: userId,
          location: formattedAddress,
          lat: lat,
          long: lng,
          visitedCountries: placesVisitedBoolean
        }
      };
      // response back from db with two updated arrays of location objects (one for places visited, one for places want to go)
      const response = await axios(config);
      console.log(response);
      const { placesVisitedArray, placesWantToVisitArray } = response;

      // invoke dispatch fn to update state with new location/coordinates
      if (placesVisitedBoolean) {
        placesVisitedDispatcher(placesVisitedArray);
      } else if (!placesVisitedBoolean) {
        placesWantToVisitDispatcher(placesWantToVisitArray);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="input-bar-container">
      <form id="location-form">
        <input
          type="text"
          id="location-input"
          name="location-input"
          class="form-control"
        />
        <label for="location-input">Enter Location</label>
        <br />
        <input
          type="radio"
          id="places-visited"
          name="places-radio-btn"
          value="places-have-been"
        />
        <br />
        <input
          type="radio"
          id="places-want-to-visit"
          name="places-radio-btn"
          value="places-want-to-visit"
        />
        <br />
        <button type="submit" class="btn" onclick={handleLocationInputClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputBar;
