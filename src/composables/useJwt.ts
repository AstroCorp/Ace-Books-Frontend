import { createSharedComposable } from "@vueuse/core";
import type { Payload, SignPayload } from "~/types/useJwt";

const useJwt = createSharedComposable(() => {
	const extractJwtPayload = (token: string) => {
		const [ header, payload, signature ] = token.split('.');
		const payloadData = JSON.parse(atob(payload));

		return payloadData;
	}

	const extractTokenData = (token: string): Payload => {
		return extractJwtPayload(token);
	}

	const extractSignData = (token: string): SignPayload => {
		return extractJwtPayload(token);
	}

	return {
		extractTokenData,
		extractSignData,
	};
});

export default useJwt;
