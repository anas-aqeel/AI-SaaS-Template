/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
          
        ],
      }
};

export default nextConfig;
