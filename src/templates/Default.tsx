import React, { FC } from "react";
import "fontsource-roboto";

import { IBaseTemplateProps } from "./index";
import {
    ContentBlock,
    Divider,
    DividerSpacing,
    Footer,
    FooterSpacing,
    Header,
    HeaderType,
    Icon,
    Seo,
    Title,
    VerticalProfile,
    VerticalProfileWidth
} from "../components";

const Default: FC<IBaseTemplateProps> = ({ pageContext }) => {
    const { blocks, meta, person } = pageContext;

    return (
        <div className="flex flex-col w-full h-screen">
            <Seo data={meta} />
            <main className="relative flex flex-col flex-grow md:flex-row">
                <VerticalProfile
                    width={VerticalProfileWidth["1/4"]}
                    person={person}
                    useGradient
                    sticky
                />
                <div className="w-full md:w-3/4">
                    <div className="p-4 space-y-6 md:p-8">
                        <div className="hidden md:block">
                            <Title className="text-primary">
                                {person.firstName} {person.lastName}
                            </Title>
                            <Header
                                type={HeaderType.H2}
                                className="leading-none"
                            >
                                <div className="flex text-block-primary-text">
                                    <span>{person.position}</span>
                                    <span className="my-auto h-0.25 bg-divider flex-grow ml-16"></span>
                                </div>
                            </Header>
                        </div>
                        <div className="space-y-8">
                            {blocks
                                .sort((a, b) => a?.order - b?.order)
                                .map(({ content, icon, title }, index) => (
                                    <ContentBlock
                                        key={`$content-block-${index}`}
                                        content={content}
                                        icon={
                                            icon ? (
                                                <Icon
                                                    icon={icon}
                                                    className="p-2 text-white rounded-full bg-block-header"
                                                />
                                            ) : null
                                        }
                                        title={
                                            <Header
                                                className="font-semibold"
                                                type={HeaderType.H3}
                                                underline={
                                                    <Divider
                                                        className="w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-block-header"
                                                        spacing={
                                                            DividerSpacing.None
                                                        }
                                                    />
                                                }
                                            >
                                                {title}
                                            </Header>
                                        }
                                    />
                                ))}
                        </div>
                    </div>
                    <Footer
                        spacing={FooterSpacing.SM}
                        text={`${person.firstName} ${person.lastName}`}
                    />
                </div>
            </main>
        </div>
    );
};

export default Default;
export { Default };
