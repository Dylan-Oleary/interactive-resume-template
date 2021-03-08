import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";

import { Avatar } from "./index";
import { IPerson } from "../templates";

interface IVerticalProfileProps {
    person: IPerson;
    width: VerticalProfileWidth;
}

enum VerticalProfileWidth {
    "1/4" = "w-1/4",
    "1/3" = "w-1/3",
    "1/2" = "w-1/2"
}

const VerticalProfile: FC<IVerticalProfileProps> = ({
    person,
    width = VerticalProfileWidth["1/3"]
}) => {
    const classNames = new ClassNames(`h-full ${width} bg-primary p-8`);

    return (
        <div className={classNames.list()}>
            <Avatar image={person.profileImageData} />
        </div>
    );
};

export default VerticalProfile;
export { VerticalProfile, VerticalProfileWidth };
