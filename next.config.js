const nextConfig = {
  reactStrictMode: true,
}

module.exports = {

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

  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', 'localhost'],
  },
}
