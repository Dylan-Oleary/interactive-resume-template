import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";

enum FooterSpacing {
    None = "py-0",
    XS = "py-1",
    SM = "py-2",
    Base = "py-4",
    MD = "py-6",
    LG = "py-8",
    XL = "py-10",
    XXL = "py-16"
}

interface IFooterProps {
    /**
     * The class name to be applied to the footer
     */
    className?: string;
    /**
     * The footer spacing
     */
    spacing?: FooterSpacing;
    /**
     * Text to display in the footer
     */
    text: string;
}

const Footer: FC<IFooterProps> = ({
    className = "",
    spacing = FooterSpacing.Base,
    text = "Footer"
}) => {
    const classNames = new ClassNames(
        `${spacing} ${className} flex justify-center w-full bg-gray-100 text-xs`
    );

    if (!classNames.has(/bg-*/)) {
        classNames.add("bg-block-content-text");
    }
    if (!classNames.has(/text-*/)) {
        classNames.add("text-xs");
    }

    return (
        <footer className={classNames.list()}>
            <span>&#169;{new Date().getFullYear()}</span>
            <span className="ml-2">{text}</span>
        </footer>
    );
};

export default Footer;
export { Footer, FooterSpacing };
