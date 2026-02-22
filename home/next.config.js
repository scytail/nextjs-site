/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/writing',
                destination: `${process.env.BASE_DOMAIN}/writing`,
            },
            {
                source: '/writing-static/:path+',
                destination: `${process.env.BASE_DOMAIN}/writing-static/:path+`,
            },
        ]
    }
}

module.exports = nextConfig
