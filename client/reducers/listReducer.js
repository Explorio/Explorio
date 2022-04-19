import * as types from '../constants/actionTypes';

const initialState = {
  currentUserID: 'Jason123',
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

  // }
  return {
    ...initialState
  }
};

export default listReducer;