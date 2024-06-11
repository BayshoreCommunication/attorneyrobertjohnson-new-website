const withTM = require('next-transpile-modules')(['some-module']); // Only include necessary modules

const nextConfig = {
  webpack: (config) => {
    // Add custom configurations if necessary
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },

      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
      },
    ],
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
