import type { Payload } from "~/types/useJwt";

const useJwt = () => {
	const extractJwtPayload = (token: string) => {
		const [ header, payload, signature ] = token.split('.');
		const payloadData = JSON.parse(atob(payload));

		return payloadData;
	}

	const extractTokenData = (token: string): Payload => {
		return extractJwtPayload(token);
	}

	return {
		extractTokenData,
	};
};

export default useJwt;
