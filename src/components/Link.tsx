import React, { FC } from "react";

interface ILinkProps {
    /**
     * Class name to be applied
     */
    className?: string;
    /**
     * The href attr of the link
     */
    href?: string;
    /**
     * Determines whether or not the link should open a new tab
     */
    openNewTab?: boolean;
}

const Link: FC<ILinkProps> = ({
    children,
    className = "",
    href = "",
    openNewTab = false
}) => {
    return (
        <a
            className={className}
            href={href}
            rel={openNewTab ? "noreferrer noopener" : ""}
            target={openNewTab ? "_blank" : "_self"}
        >
            {children}
        </a>
    );
};

export default Link;
export { Link };
