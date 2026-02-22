/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/writing',
                destination: `${process.env.WRITING_DOMAIN}`,
            },
            {
                source: '/writing-static/:path+',
                destination: `${process.env.WRITING_DOMAIN}/:path+`,
            },
        ]
    }
}

module.exports = nextConfig
