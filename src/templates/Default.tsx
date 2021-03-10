import React, { FC } from "react";

import { IBaseTemplateProps } from "./index";
import {
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
                <div className="flex-grow p-8">
                    <div>
                        <Title className="text-primary">
                            {person.firstName}
                        </Title>
                        <Title className="text-primary">
                            {person.lastName}
                        </Title>
                        <div className="flex">
                            <Header type={HeaderType.H2}>
                                {person.position}
                            </Header>
                            <div className="flex-grow w-auto h-0.5 ml-8 bg-gray-400"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Default;
export { Default };
