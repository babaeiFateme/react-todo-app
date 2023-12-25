/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Josefin: ["JosefinSans"],
            },
            maxWidth: {
                250: "250px",
                500: "500px",
                600: "600px",
                800: "800px",
            },
            minHeight: {
                100: "100px",
                250: "250px",
                500: "500px",
                600: "600px",
                800: "800px",
            },
            borderRadius: {
                main: "20px",
            },
            height: {
                250: "250px",
            },
            backdropBlur: {
                3: "3px",
            },
            boxShadow: {
                main: "-5px 6px 28px rgba(0, 0, 0, 0.12)",
            },
            colors: {
                purple: "#3f3cbb",
                primary: "#121023",
                grayMain: "rgba(255, 255, 255, 0.2)",
            },
        },
    },
    plugins: [require("daisyui")],
};
