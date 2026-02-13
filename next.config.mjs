/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES === "true" ? "/resume" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
