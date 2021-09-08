import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/actionTypes';

const initialState = {
	loading: false,
	error: '',
	token: '',
};

const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				loading: true,
				error: '',
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.payload.access_token,
			};

		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
				error: 'errors.logIn',
			};

		default:
			return state;
	}
}

export default authReducer;
