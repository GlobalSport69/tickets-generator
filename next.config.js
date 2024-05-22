/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'dryjjfcsfgp14.cloudfront.net',
            },
        ],
    },
    headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "localhost:3000" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    generateBuildId: async () => {
        return process.env.GIT_HASH
    },
}

module.exports = nextConfig
