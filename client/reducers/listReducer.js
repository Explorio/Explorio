import * as types from '../constants/actionTypes';

const initialState = {
  currentUsername: '',
  currentUserId: '',
  placesVisited: [],
  placesWantToVisit: [],
  userFriends: [],
  friendSelected: false,
  friendVisitedCountries: [],
  friendDestinationCountries: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PLACES_VISITED: {
      const updatedPlacesVisited = action.payload;
      return { ...state, placesVisited: updatedPlacesVisited };
    }

    case types.UPDATE_PLACES_WANT_TO_VISIT: {
      const updatedPlacesWantToVisit = action.payload;
      return { ...state, placesWantToVisit: updatedPlacesWantToVisit };
    }

    default:
      return state;
  }
};

export default listReducer;
