/** @type {import('next').NextConfig} */
module.exports = {
  // for SSG
  // output: 'export'
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
      }
    ]
  }
};
