/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: { domains: ['daisyui.com'], formats: ['image/avif', 'image/webp'] }, // TODO: Remove
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
