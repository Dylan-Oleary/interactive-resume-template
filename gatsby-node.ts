import path from "path";

type AvailableTemplatePaths = {
    default: string;
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type DataJsonPerson implements Node {
            firstName: String!
            lastName: String!
            position: String!
            profileImage: String 
            skills: [String]
            summary: String!
            links: DataJsonPersonLinks
        }

        type DataJsonPersonLinks implements Node {
            email: String
            facebook: String
            instagram: String
            linkedin: String
            phone: String
            twitter: String
            website: String
        }

        type DataJsonBlocks implements Node {
            title: String!
            order: Int!
            content: [DataJsonBlocksContent]
        }

        type DataJsonBlocksContent implements Node {
            title: String!
            startDate: Date!
            endDate: Date
            summary: String
            order: Int!
        }
  `;

    createTypes(typeDefs);
};

exports.createPages = async ({ actions, graphql }) => {
    const availableTemplates: AvailableTemplatePaths = {
        default: "src/templates/Default.tsx"
    };
    const { createPage } = actions;
    const { data } = await graphql(`
        query {
            dataJson {
                template
                person {
                    firstName
                    lastName
                    position
                    profileImage
                    skills
                    summary
                    links {
                        email
                        facebook
                        instagram
                        linkedin
                        phone
                        twitter
                        website
                    }
                }
                blocks {
                    title
                    order
                    content {
                        title
                        startDate
                        endDate
                        summary
                        order
                    }
                }
            }
            site {
                siteMetadata {
                    author
                    description
                    lang
                    title
                    twitter
                    siteUrl
                }
            }
        }
    `);

    const { dataJson, site } = data;

    const { data: imageData } = await graphql(`
        query {
            file(relativePath: { eq: "${dataJson.person.profileImage}" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 175
                        aspectRatio: 1
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        transformOptions: {
                            grayscale: true
                        }
                    )
                }
            }
        }
    `);

    const template = dataJson?.template || "Default";
    let templatePath: string;

    switch (template.toLowerCase()) {
        case "default":
            templatePath = availableTemplates.default;
            break;
        default:
            templatePath = availableTemplates.default;
            break;
    }

    createPage({
        path: "/",
        component: path.resolve(templatePath),
        context: {
            blocks: dataJson.blocks,
            meta: site.siteMetadata,
            person: {
                ...dataJson.person,
                profileImageData:
                    imageData.file?.childImageSharp?.gatsbyImageData
            }
        }
    });
};
