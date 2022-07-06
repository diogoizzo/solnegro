const { redirect } = require("next/dist/server/api-utils");
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-red": "#ED1C24",
                "brand-red-dark": "#930c1b",
                "brand-gray": "#3C3C3C",
                dark: "#3d3d3d",
            },
            fontFamily: {
                roboto: ["Roboto"],
                robotoCond: ["Roboto Condensed"],
                montserrat: ["Montserrat"],
                noto: ["Noto"],
            },
            screens: {
                "3xl": "1800px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
