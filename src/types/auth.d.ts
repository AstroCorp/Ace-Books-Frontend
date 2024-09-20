interface UserLoginData {
	email: string;
	avatar: string;
	isAdmin: boolean;
	isVerified: boolean;
}

interface LoginData {
	user: UserLoginData;
	access_token: string;
	refresh_token: string;
}

declare module '#auth-utils' {
	interface User extends UserLoginData {}

	interface UserSession extends LoginData {}
}

export interface SessionResponse extends LoginData {}

interface BaseErrorResponse {
	message: string;
	stack: string;
	statusCode: number;
	statusMessage: string;
	url: string;
}

export interface RegisterErrorResponse extends BaseErrorResponse {
	data: {
		message: string[];
		error: string;
		statusCode: number;
	};
}

export interface LoginErrorResponse extends BaseErrorResponse {
	data: {
		message: string;
		statusCode: number;
	};
}

export interface SessionSuccessResponse {
	success: boolean;
}
