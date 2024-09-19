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

export interface RegisterErrorResponse {
	data: {
		message: string[];
		error: string;
		statusCode: number;
	};
	message: string;
	stack: string;
	statusCode: number;
	statusMessage: string;
	url: string;
}

export interface SessionSuccessResponse {
	success: boolean;
}
