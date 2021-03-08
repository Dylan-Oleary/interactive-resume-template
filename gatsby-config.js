module.exports = {
    siteMetadata: {
        author: "Dylan O'Leary",
        description:
            "A template for developing super fast, interactive resumes",
        lang: "en",
        title: "Interactive Resume Template",
        twitter: "@dylanolearydev",
        siteUrl: "https://github.com/Dylan-Oleary/interactive-resume-template"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Dylan O'Leary",
                short_name: "Dylan O'Leary",
                start_url: "/",
                background_color: "#2C9E92",
                theme_color: "#2C9E92",
                display: "minimal-ui",
                icon: "src/images/devfavicon.png",
                description:
                    "A template for developing super fast, interactive resumes"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: "./src/data/"
            },
            __key: "data"
        },
        "gatsby-plugin-ts-config"
    ]
};
