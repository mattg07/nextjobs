import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'registry.npmmirror.com', // Remove the wildcard here
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'logodownload.org', // Remove the wildcard here
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Remove the wildcard here
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // Remove the wildcard here
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'registry.npmmirror.com', // Remove the wildcard here
        port: '',
      },
    ],
  },
};

export default nextConfig;
