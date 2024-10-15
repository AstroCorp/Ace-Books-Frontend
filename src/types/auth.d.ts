interface UserSessionData {
	userId: number;
	isAdmin: boolean;
	isVerified: boolean;
}

export interface SessionResponse {
	access_token: string;
	refresh_token: string;
}

declare module '#auth-utils' {
	interface User extends UserSessionData {}

	interface UserSession extends SessionResponse {
		user: UserSessionData;
	}
}

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
