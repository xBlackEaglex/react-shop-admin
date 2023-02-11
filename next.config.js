/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'ui-avatars.com', 'api.lorem.space'],
    },
};

module.exports = nextConfig;
