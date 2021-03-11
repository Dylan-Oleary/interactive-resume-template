import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";

enum DividerSpacing {
    None = "my-0",
    XS = "my-1",
    SM = "my-2",
    Base = "my-4",
    MD = "my-6",
    LG = "my-8",
    XL = "my-10",
    XXL = "my-16"
}

interface IDividerProps {
    /**
     * Classes to be applied on the divider
     */
    className?: string;
    /**
     * Top and bottom spacing of the divider
     */
    spacing?: DividerSpacing;
}

const Divider: FC<IDividerProps> = ({
    className = "",
    spacing = DividerSpacing.Base
}) => {
    const classNames = new ClassNames(`${spacing} ${className}`);

    if (!classNames.has(/bg-*/)) {
        classNames.add("bg-block-content-text");
    }
    if (!classNames.has(/h-*/)) {
        classNames.add("h-0.5");
    }

    return <hr className={classNames.list()}></hr>;
};

export default Divider;
export { Divider, DividerSpacing };
