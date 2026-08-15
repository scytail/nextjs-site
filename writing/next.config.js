/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/writing-static',
    async redirects() {
        return [
            {
                // Redirect from the root path to /writing, mainly for development purposes (as the root path is used for the main site)
                source: '/',
                destination: '/writing',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
