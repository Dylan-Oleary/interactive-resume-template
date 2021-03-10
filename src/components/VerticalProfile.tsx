import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";

import { Avatar, Header, HeaderType } from "./index";
import { IPerson } from "../templates";

interface IVerticalProfileProps {
    person: IPerson;
    useGradient?: boolean;
    width: VerticalProfileWidth;
}

enum VerticalProfileWidth {
    "1/4" = "w-1/4",
    "1/3" = "w-1/3",
    "1/2" = "w-1/2"
}

const VerticalProfile: FC<IVerticalProfileProps> = ({
    person,
    useGradient = false,
    width = VerticalProfileWidth["1/3"]
}) => {
    const {
        firstName,
        lastName,
        links = null,
        profileImageData,
        skills = [],
        summary = null
    } = person;
    const classNames = new ClassNames(
        `h-full ${width} ${
            useGradient
                ? "bg-gradient-to-br from-primary to-primary-darkest"
                : "bg-primary"
        } p-8`
    );

    return (
        <div className={classNames.list()}>
            <Avatar
                alt={`Headshot of ${firstName} ${lastName}`}
                image={profileImageData}
            />
            <div className="mt-4 space-y-2 text-white">
                {summary && (
                    <div>
                        <Header className="font-bold" type={HeaderType.H2}>
                            Summary
                        </Header>
                        <p>{summary}</p>
                    </div>
                )}
                <div>
                    <Header className="font-bold" type={HeaderType.H2}>
                        Download
                    </Header>
                </div>
                {Object.keys(links).length > 0 && (
                    <div>
                        <Header className="font-bold" type={HeaderType.H2}>
                            Links
                        </Header>
                        {links.email && <p>{links.email}</p>}
                        {links.facebook && <p>{links.facebook}</p>}
                        {links.instagram && <p>{links.instagram}</p>}
                        {links.linkedin && <p>{links.linkedin}</p>}
                        {links.phone && <p>{links.phone}</p>}
                        {links.twitter && <p>{links.twitter}</p>}
                        {links.website && <p>{links.website}</p>}
                    </div>
                )}
                {skills.length > 0 && (
                    <div>
                        <Header className="font-bold" type={HeaderType.H2}>
                            Skills
                        </Header>
                        {skills.map((skill, index) => (
                            <div key={`skill-${index}`}>{skill}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerticalProfile;
export { VerticalProfile, VerticalProfileWidth };
