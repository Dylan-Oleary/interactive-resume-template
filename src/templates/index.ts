import { IGatsbyImageData } from "gatsby-plugin-image";

interface IBaseTemplateProps {
    pageContext: {
        meta: ISiteMetaData;
        person: IPerson;
        blocks: IBlock[];
        contact?: IContact;
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

interface IPersonLink {
    label: string;
    link: string;
}

interface IPersonLinks {
    email?: IPersonLink;
    facebook?: IPersonLink;
    instagram?: IPersonLink;
    linkedin?: IPersonLink;
    phone?: IPersonLink;
    twitter?: IPersonLink;
    website?: IPersonLink;
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

interface IContact {
    title: string;
    summary?: string;
    buttonText?: string;
    inputs: IContactInput[];
}

interface IContactInput {
    type: "textarea" | "text" | "email";
    label: string;
    name: string;
    isRequired: boolean;
    placeholder?: string;
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
    IContact,
    IContactInput,
    IPerson,
    IPersonLink,
    IPersonLinks,
    ISiteMetaData
};
