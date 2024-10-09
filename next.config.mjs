/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "development" ? undefined : "https://konstantin-lukas.github.io/alanakbik.github.io/",
};
export default nextConfig;
