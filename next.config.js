/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD,
        TO: process.env.To

    }

}

module.exports = nextConfig