import { LOGIN } from './actionTypes';

export const login = (email: string, password: string) => {
	return {
		type: LOGIN,
		payload: {
			request: {
				url: 'auth/login',
				method: 'POST',
				data: {
					email,
					password,
				},
			},
		},
	};
}
