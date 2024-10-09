/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "development" ? undefined : "/alanakbik.github.io",
};
export default nextConfig;
