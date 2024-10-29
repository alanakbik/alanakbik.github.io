import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderWidth: {
                "3": "3px",
            },
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
            boxShadow: {
                "gallery": "0 0 1rem rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [],
};
export default config;
