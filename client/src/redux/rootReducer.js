import {
  combineReducers,
} from 'redux';
import authenticationReducer from './authentication';
import registrationReducer from './registration';
import POSTReducer from './post';

export default combineReducers({
  auth: authenticationReducer,
  reg: registrationReducer,
  post: POSTReducer,
});
