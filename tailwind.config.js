module.exports = {
    purge: ["./src/**/*.tsx", "./src/**/*.jsx"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#1A79CB",
                "primary-dark": "#1667AD",
                "primary-darker": "#12558E",
                "primary-darkest": "#0E4370",
                "primary-light": "#5FA1DB",
                "primary-lighter": "#A3C9EA",
                "primary-lightest": "#E5F0FE"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
