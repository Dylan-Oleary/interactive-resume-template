import React, { FC } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface IAvatarProps {
    /**
     * The image's alt text
     */
    alt: string;
    /**
     * The Gatsby image data
     */
    image: IGatsbyImageData;
}

const Avatar: FC<IAvatarProps> = ({
    alt = "Profile picture avatar",
    image
}) => {
    return (
        <div className="flex justify-center">
            <GatsbyImage className="rounded-full" image={image} alt={alt} />
        </div>
    );
};

export default Avatar;
export { Avatar };
