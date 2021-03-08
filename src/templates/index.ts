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
    profileImageData: IImageData;
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

interface IImageData {
    layout: string;
    srcSet: string;
    width?: number;
    height?: number;
}

interface IBlock {
    title: string;
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
