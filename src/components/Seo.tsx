import React, { FC } from "react";
import Helmet from "react-helmet";

interface ISeoProps {
    data: {
        author: string;
        description: string;
        lang: string;
        siteUrl: string;
        title: string;
        twitter?: string;
    };
}

const Seo: FC<ISeoProps> = ({ data }) => {
    const {
        author,
        description,
        lang = "en",
        siteUrl,
        title,
        twitter = null
    } = data;

    return (
        <Helmet title={title}>
            <html lang={lang} />
            <meta name="author" content={author} />
            <meta name="description" content={description} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:description" content={description} />
            {/* {<meta property="og:image" content={image} />} */}
            {twitter && (
                <meta name="twitter:card" content="summary_large_image" />
            )}
            {twitter && <meta name="twitter:creator" content={twitter} />}
            {twitter && <meta name="twitter:title" content={title} />}
            {twitter && (
                <meta name="twitter:description" content={description} />
            )}
            {/* {twitter && <meta property="twitter:image" content={image} />} */}
        </Helmet>
    );
};

export default Seo;
export { Seo };
