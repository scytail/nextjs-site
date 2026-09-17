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
            {
                // the root admin path is blank and should redirect to the dashboard
                source: '/writing/admin',
                destination: '/writing/admin/dashboard',
                permanent: true,
            },
            {
                // the root stories path is blank and should redirect back to the main writing page
                source: '/writing/stories',
                destination: '/writing',
                permanent: true,
            }
        ]
    },
}

module.exports = nextConfig
