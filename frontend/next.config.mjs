/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
eslint:{
  ignoreDuringBuilds: true,
},
images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '127.0.0.1',
      port: '1337',
      
    },
  ],
},

 
};

export default nextConfig;
