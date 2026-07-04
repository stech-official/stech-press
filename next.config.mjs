/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/og',
        search: '?*',
      },
      {
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
