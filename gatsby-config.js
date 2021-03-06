module.exports = {
    siteMetadata: {
        title: "Interactive Resume Template",
        siteUrl: "https://github.com/Dylan-Oleary/interactive-resume-template",
        description: "A template for developing super fast, interactive resumes"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        }
    ]
};
