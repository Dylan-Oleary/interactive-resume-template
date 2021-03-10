import React, { FC, ReactElement } from "react";

enum HeaderType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}

interface IHeaderProps {
    /**
     * Classes to be applied to the header element
     */
    className?: string;
    /**
     * The type of header element to render
     */
    type?: HeaderType;
}

const Header: FC<IHeaderProps> = ({
    children,
    className = "",
    type = HeaderType.H1
}) => {
    const createHeader: () => ReactElement = () => {
        let element: ReactElement;

        switch (type) {
            case HeaderType.H1:
                element = (
                    <h1
                        className={`text-h3 md:text-h2 lg:text-h1 ${className}`}
                    >
                        {children}
                    </h1>
                );
                break;
            case HeaderType.H2:
                element = (
                    <h2
                        className={`text-h4 md:text-h3 lg:text-h2 ${className}`}
                    >
                        {children}
                    </h2>
                );
                break;
            case HeaderType.H3:
                element = (
                    <h3
                        className={`text-h5 md:text-h4 lg:text-h3 ${className}`}
                    >
                        {children}
                    </h3>
                );
                break;
            case HeaderType.H4:
                element = (
                    <h4
                        className={`text-h6 md:text-h5 lg:text-h4 ${className}`}
                    >
                        {children}
                    </h4>
                );
                break;
            case HeaderType.H5:
                element = (
                    <h5
                        className={`text-h6 md:text-h6 lg:text-h5 ${className}`}
                    >
                        {children}
                    </h5>
                );
                break;
            case HeaderType.H6:
                element = (
                    <h6 className={`text-h6 ${className}`}>{children}</h6>
                );
                break;
            default:
                element = (
                    <h1
                        className={`text-h3 md:text-h2 lg:text-h1 ${className}`}
                    >
                        {children}
                    </h1>
                );
                break;
        }

        return element;
    };

    return createHeader();
};

export default Header;
export { Header, HeaderType };
