declare global {
	interface ImportMetaEnv {
		NODE_ENV: Environment;
		NODE_PORT: number;

		BACKEND_URL: string;
	}
}

enum Environment {
	Development = 'development',
	Production = 'production',
}

export {
	Environment,
};
