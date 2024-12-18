import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* Preserve existing config */
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },

  /* Add webpack configuration for path resolution */
  webpack: (config, { isServer }) => {
    // Add alias for root directory
    config.resolve.alias['@'] = path.resolve(__dirname);
    
    // Optional: Add more detailed logging for debugging
    console.log('Webpack Resolve Aliases:', config.resolve.alias);
    console.log('Current Project Root:', __dirname);
    
    return config;
  }
};

export default nextConfig;
