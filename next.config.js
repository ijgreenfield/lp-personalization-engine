const nextConfig = {
  reactStrictMode: true,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // this will allow site to be framed under builder.io for wysiwyg editing
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https://*.builder.io https://builder.io',
          },
        ],
      },
    ]
  },
  env: {
    // expose env to the browser
    BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', 'localhost'],
  },
})
