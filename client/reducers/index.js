import { combineReducers } from 'redux';
import listReducer from './listReducer';

const reducers = combineReducers({
  list: listReducer,
});

export default reducers;