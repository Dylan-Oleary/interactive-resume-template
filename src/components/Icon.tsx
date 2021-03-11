import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";
import parse from "html-react-parser";

enum IconSize {
    Default = "icon"
}

interface IIconProps {
    /**
     * Classes to be applied to the wrapper
     */
    className?: string;
    /**
     * A stringified SVG used for icon display
     */
    icon: string;
    /**
     * The size of the icon
     */
    size?: IconSize;
}

const Icon: FC<IIconProps> = ({
    className = "",
    icon,
    size = IconSize.Default
}) => {
    const classes = new ClassNames(size).add(className);

    return <div className={classes.list()}>{parse(icon)}</div>;
};

export default Icon;
export { Icon, IconSize };
