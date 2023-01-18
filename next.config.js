/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["reqres.in", "avatars.githubusercontent.com", "lh3.googleusercontent.com", "encrypted-tbn0.gstatic.com", "avatars0.githubusercontent.com"],
    },
};

module.exports = nextConfig;
