import { combineReducers } from 'redux';
import merchants from './merchantReducer';

const rootReducer = combineReducers({
  merchants
});

export default rootReducer;
