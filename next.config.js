/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/personal",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;