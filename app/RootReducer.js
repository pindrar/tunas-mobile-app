import { combineReducers } from 'redux';
import AuthReducer from './screens/login/Reducer';

/** Combine all available reducers which will be accessible from all components */
export default combineReducers({
    auth: AuthReducer,
});
