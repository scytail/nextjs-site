/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/writing',
                destination: `${process.env.WRITING_DOMAIN}/writing`,
            },
            {
                source: '/writing/:path+',
                destination: `${process.env.WRITING_DOMAIN}/writing/:path+`,
            },
            {
                source: '/writing-static/:path+',
                destination: `${process.env.WRITING_DOMAIN}/writing-static/:path+`,
            },
        ]
    }
}

module.exports = nextConfig
