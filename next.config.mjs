/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    //      domains: [
    //   "develop-clipverse.s3.ap-south-1.amazonaws.com", // ✅ allow S3 images
    // ],
    remotePatterns: [
      {
        protocol: "https",
       hostname: "develop-clipverse.s3.ap-south-1.amazonaws.com", // ✅ allow example.com
      },
      {
        protocol: "https",
        hostname: "**.yourdomain.com", // (optional) allow your own CDN or image hosts
      },
      
    ],
  },
};

export default nextConfig;
