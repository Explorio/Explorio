import * as types from '../constants/actionTypes';

const initialState = {
  currentUsername: 'Jason123',
  currentUserId: '',
  userVisitedCountries: [],
  userDestinationCountries: [],
  userFriends: [],
  friendSelected: false,
  friendVisitedCountries: [],
  friendDestinationCountries: [],
}

const listReducer = (state = initialState, action) => {
  
  // switch (action.type) {
  //   case types.LOG_IN:
  switch(action.type) {
    case types.UPDATE_USERNAME:
      return {
        ...state,
        currentUsername: action.payload
      };
    // case types.GET_ALL_LOCATIONS:
    //   const userObj = action.payload;
    //   const userVisitedCountries = userObj.placesVisitedArray;
    //   const userDestinationCountries = userObj.placesWantToVisitArray;

    //   return {
    //     ...state,
    //     userVisitedCountries,
    //     userDestinationCountries,
    //   };

  }
};

export default listReducer;