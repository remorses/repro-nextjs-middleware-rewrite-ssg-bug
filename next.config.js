/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // basePath: '/app',
    i18n: {
        locales: ['en', 'fr', 'es'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig
