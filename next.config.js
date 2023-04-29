/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'fr', 'nl-NL'],
  },
};

module.exports = nextConfig;
