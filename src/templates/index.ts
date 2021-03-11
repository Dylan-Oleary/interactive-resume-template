import { IGatsbyImageData } from "gatsby-plugin-image";

interface IBaseTemplateProps {
    pageContext: {
        meta: ISiteMetaData;
        person: IPerson;
        blocks: IBlock[];
    };
}

interface IPerson {
    firstName: string;
    lastName: string;
    position: string;
    skills: string[];
    summary: string;
    profileImageData: IGatsbyImageData;
    links?: IPersonLinks;
}

interface IPersonLinks {
    email?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    phone?: string;
    twitter?: string;
    website?: string;
}

interface IBlock {
    title: string;
    icon?: string;
    order: number;
    content: IBlockContent[];
}

interface IBlockContent {
    title: string;
    startDate: Date;
    endDate?: Date;
    summary: string;
    order: number;
}

interface ISiteMetaData {
    author: string;
    description: string;
    lang: string;
    siteUrl: string;
    title: string;
    twitter?: string;
}

export {
    IBaseTemplateProps,
    IBlock,
    IBlockContent,
    IPerson,
    IPersonLinks,
    ISiteMetaData
};
