module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "20px",
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#CD0002",
                    secondary: "#f6d860",
                    accent: "#1A191D",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark",
            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
