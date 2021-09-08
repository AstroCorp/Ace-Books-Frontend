import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = (history: History) => combineReducers({
	authReducer,
	router: connectRouter(history)
});

export default rootReducer;
