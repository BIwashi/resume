/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_PAGES === "true" ? "/resume" : "";
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
