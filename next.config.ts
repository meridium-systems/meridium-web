
const nextConfig: NextConfig = {
	output: 'export', // Required for GitHub Pages
	images: {
		unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
};

export default nextConfig;