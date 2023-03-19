/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	// create webpack configuration resolve fallback fs, path and crypto is false by default
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.fallback = {
			fs: false,
			path: false,
			crypto: false,
		};
		return config;
	},
};

module.exports = nextConfig;
