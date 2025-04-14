/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',   // Proxy requests starting with /api
                destination: 'https://losservices.finanalyz.com/api/:path*',  // Target API
            },
        ];
    },
};

module.exports = nextConfig;