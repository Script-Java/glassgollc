// next.config.mjs
import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  images: {
    domains: ['glassgollc.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      { source: '/:slug+.html', destination: '/:slug', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'glassgollc.com' }],
        destination: 'https://glassgollc.com/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  i18n: { locales: ['en-US'], defaultLocale: 'en-US' },

  webpack(config) {
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    );
    return config;
  },
};

export default nextConfig;
