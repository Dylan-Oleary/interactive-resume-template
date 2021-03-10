import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";

interface ITitleProps {
    /**
     * Classes to be applied to the element
     */
    className?: string;
}

const Title: FC<ITitleProps> = ({ children, className = "" }) => {
    const classes = new ClassNames("text-title font-bold").add(className);

    return <div className={classes.list()}>{children}</div>;
};

export default Title;
export { Title };
