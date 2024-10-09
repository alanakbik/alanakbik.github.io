import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "hu-blue-primary": "#00376c",
                "hu-blue-secondary": "#8db4d9",
            },
            spacing: {
                "header-height": "6rem",
            },
            screens: {
                "desktop": {
                    "raw": "(min-width: 768px) and (min-height: 640px)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
