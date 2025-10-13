/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['royaltaxibracknell.co.uk', 'www.royaltaxibracknell.co.uk'],
        },
    },
};

export default nextConfig;
