/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,  // required for static export
  },
  distDir: "out", 

  assetPrefix: process.env.NODE_ENV === 'production' ? '/piwwo-draw/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/piwwo-draw' : '',
};

export default nextConfig;
