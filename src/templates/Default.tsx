import React, { FC } from "react";

import { IBaseTemplateProps } from "./index";
import {
    ContentBlock,
    Divider,
    DividerSpacing,
    Header,
    HeaderType,
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
            <main className="flex flex-grow">
                <VerticalProfile
                    width={VerticalProfileWidth["1/4"]}
                    person={person}
                    useGradient
                />
                <div className="w-3/4 p-8 space-y-6">
                    <div>
                        <Title className="text-primary">
                            {person.firstName}
                        </Title>
                        <Title className="text-primary">
                            {person.lastName}
                        </Title>
                        <Header type={HeaderType.H2}>{person.position}</Header>
                    </div>
                    <div className="space-y-6">
                        {blocks
                            .sort((a, b) => a?.order - b?.order)
                            .map(({ content, title }, index) => (
                                <ContentBlock
                                    key={`$content-block-${index}`}
                                    content={content}
                                    title={
                                        <Header
                                            className="font-bold"
                                            type={HeaderType.H2}
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
                                    showDivider={index !== blocks.length - 1}
                                />
                            ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Default;
export { Default };
