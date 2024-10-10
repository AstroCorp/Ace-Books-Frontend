export interface Payload {
	user_id: number;
	iat: number;
	exp: number;
}

export interface SignPayload {
	user_id: number;
	type: string;
	iat: number;
	exp: number;
}
