/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "development" ? "" : "/alanakbik.github.io",
    images: {
        unoptimized: true,
    },
};
export default nextConfig;
