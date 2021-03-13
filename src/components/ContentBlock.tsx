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
     * A stringified SVG used for icon display
     */
    icon?: ReactNode;
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
    title = "Content Block",
    icon
}) => (
    <div className="p-4 border border-gray-800 rounded-md shadow-md border-opacity-5">
        <div className={`${icon ? "flex" : ""} items-center text-block-header`}>
            <div className="mr-2">{icon && icon}</div>
            <div>{title}</div>
        </div>
        <div className="flex flex-col flex-wrap justify-between md:flex-row">
            {content.map((content, index) => (
                <div
                    key={`${title}-${content.title}-${index}`}
                    className={`w-full ${
                        index === 0 ? "mt-6" : "mt-12"
                    } lg:mt-6 lg:w-5/12`}
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
                        type={HeaderType.H5}
                        className="font-medium text-block-primary-text"
                    >
                        {content.title}
                    </Header>
                    <p className="mt-2 md:mt-4 text-block-content-text">
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
