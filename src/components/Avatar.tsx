import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

interface IAvatarProps {
    image: any;
}

const Avatar: FC<IAvatarProps> = ({ image }) => {
    return (
        <div className="flex justify-center">
            <GatsbyImage
                className="w-48 h-48 rounded-full"
                image={image}
                alt="Profile Picture"
            />
        </div>
    );
};

export default Avatar;
export { Avatar };
