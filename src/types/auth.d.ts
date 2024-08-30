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

export interface LoginResponse extends LoginData {}
