/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/og',
        search: '?*',
      },
    ],
  },
};

export default nextConfig;
