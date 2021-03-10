module.exports = {
    purge: ["./src/**/*.tsx", "./src/**/*.jsx"],
    darkMode: false,
    theme: {
        gradientColorStops: (theme) => ({
            ...theme("colors"),
            primary: "#E4000F",
            "primary-darkest": "#A0000B"
        }),
        extend: {
            colors: {
                primary: "#E4000F",
                "primary-dark": "#CD000E",
                "primary-darker": "#B6000C",
                "primary-darkest": "#A0000B",
                "primary-light": "#E71A27",
                "primary-lighter": "#E933F",
                "primary-lightest": "#EC4D57"
            },
            fontSize: {
                title: "4rem",
                h1: "3.125rem",
                h2: "2.31rem",
                h3: "1.81rem",
                h4: "1.5rem",
                h5: "1.31rem",
                h6: "1.18rem"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
