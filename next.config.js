/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["reqres.in", "avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;
