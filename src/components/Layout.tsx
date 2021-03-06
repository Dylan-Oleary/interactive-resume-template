import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Seo } from "../components";

interface ISiteData {
    site: {
        siteMetadata: {
            author: string;
            description: string;
            lang: string;
            siteUrl: string;
            title: string;
            twitter?: string;
        };
    };
}

const Layout: FC = ({ children }) => {
    const { site } = useStaticQuery<ISiteData>(GET_SITE_DATA);

    return (
        <div className="w-full h-screen flex flex-col">
            <Seo data={site.siteMetadata} />
            <main className="flex-grow">{children}</main>
        </div>
    );
};

const GET_SITE_DATA = graphql`
    query {
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
`;

export default Layout;
export { Layout };
