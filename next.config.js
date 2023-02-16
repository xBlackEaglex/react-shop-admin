/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.unsplash.com',
            'ui-avatars.com',
            'api.lorem.space',
            'placeimg.com',
            'i.imgur.com',
            'raw.githubusercontent.com',
            'm.media-amazon.com',
            'cdn.shopify.com',
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
