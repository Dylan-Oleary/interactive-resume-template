import React, { FC, ReactNode } from "react";
import * as dayjs from "dayjs";

import { Divider, DividerSpacing, Header, HeaderType } from "../components";
import { IBlockContent } from "../templates";

interface IContentBlockProps {
    /**
     * The block content
     */
    content: IBlockContent[];
    /**
     * Determines whether a divider should render underneath the block
     */
    showDivider?: boolean;
    /**
     * The title of the block
     */
    title: string | ReactNode;
}

const ContentBlock: FC<IContentBlockProps> = ({
    content,
    showDivider = false,
    title = "Content Block"
}) => (
    <div>
        <div className="text-block-header">{title}</div>
        <div className="flex flex-col flex-wrap justify-between md:flex-row">
            {content.map((content, index) => (
                <div
                    key={`${title}-${content.title}-${index}`}
                    className="w-1/2 mt-6"
                >
                    <div className="font-light leading-none text-block-content-text">
                        {dayjs(content.startDate)
                            .format("MMMM YYYY")
                            .toString()}
                        <span> - </span>
                        {content?.endDate
                            ? dayjs(content.endDate)
                                  .format("MMMM YYYY")
                                  .toString()
                            : "Present"}
                    </div>
                    <Header
                        type={HeaderType.H4}
                        className="font-medium text-block-primary-text"
                    >
                        {content.title}
                    </Header>
                    <p className="mt-4 text-block-content-text">
                        {content.summary}
                    </p>
                </div>
            ))}
        </div>
        {showDivider && (
            <Divider className="w-1/3 mx-auto" spacing={DividerSpacing.XXL} />
        )}
    </div>
);

export default ContentBlock;
export { ContentBlock };
