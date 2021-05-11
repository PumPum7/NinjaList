const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: {
        content: [
            "./src/components/**/*.{js,ts,jsx,tsx}",
            "./src/pages/**/*.{js,ts,jsx,tsx}",
        ],
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                nord: {
                    0: "#2e3440",
                    1: "#3b4252",
                    2: "#434c5e",
                    3: "#4c566a",
                    4: "#d8dee9",
                    5: "#e5e9f0",
                    6: "#eceff4",
                    7: "#8fbcbb",
                    8: "#88c0d0",
                    9: "#81a1c1",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
