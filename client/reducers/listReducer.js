import * as types from '../constants/actionTypes';

const initialState = {
  currentUserID: null,
  userVisitedCountries: [],
  userDestinationCountries: [],
  userFriends: [],
  friendSelected: false,
  friendVisitedCountries: [],
  friendDestinationCountries: [],
}

const listReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.ADD_FRIEND:
      
  }
};

export default listReducer;