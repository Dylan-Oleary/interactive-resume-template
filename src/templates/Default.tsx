import React, { FC } from "react";

import { IBaseTemplateProps } from "./index";
import { Seo, VerticalProfile, VerticalProfileWidth } from "../components";

const Default: FC<IBaseTemplateProps> = ({ pageContext }) => {
    const { blocks, meta, person } = pageContext;

    return (
        <div className="flex flex-col w-full h-screen">
            <Seo data={meta} />
            <main className="flex-grow">
                <VerticalProfile
                    width={VerticalProfileWidth["1/4"]}
                    person={person}
                />
            </main>
        </div>
    );
};

export default Default;
export { Default };
