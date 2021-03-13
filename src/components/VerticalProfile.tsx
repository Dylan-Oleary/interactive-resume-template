import React, { FC } from "react";
import { ClassNames } from "@44north/classnames";

import {
    Avatar,
    Divider,
    DividerSpacing,
    Header,
    HeaderType,
    Link
} from "./index";
import {
    DownloadIcon,
    EmailIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    PhoneIcon,
    TwitterIcon,
    WebIcon
} from "../icons";
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
            <div className="mt-4 space-y-2 text-nav-text">
                {summary && (
                    <div>
                        <Header
                            className="font-semibold"
                            type={HeaderType.H2}
                            underline={
                                <Divider
                                    className="w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                    spacing={DividerSpacing.None}
                                />
                            }
                        >
                            Summary
                        </Header>
                        <p className="mt-4">{summary}</p>
                    </div>
                )}
                <div>
                    <Header
                        className="font-semibold"
                        type={HeaderType.H2}
                        underline={
                            <Divider
                                className="w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                spacing={DividerSpacing.None}
                            />
                        }
                    >
                        Download
                    </Header>
                </div>
                {Object.keys(links).length > 0 && (
                    <div>
                        <Header
                            className="font-semibold tracking-wide"
                            type={HeaderType.H2}
                            underline={
                                <Divider
                                    className="w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                    spacing={DividerSpacing.None}
                                />
                            }
                        >
                            Links
                        </Header>
                        <div className="mt-4 space-y-2">
                            {links.email && (
                                <Link
                                    href={links.email.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <EmailIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.email.label}
                                    </span>
                                </Link>
                            )}
                            {links.twitter && (
                                <Link
                                    href={links.twitter.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <TwitterIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.twitter.label}
                                    </span>
                                </Link>
                            )}
                            {links.facebook && (
                                <Link
                                    href={links.facebook.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <FacebookIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.facebook.label}
                                    </span>
                                </Link>
                            )}
                            {links.instagram && (
                                <Link
                                    href={links.instagram.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <InstagramIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.instagram.label}
                                    </span>
                                </Link>
                            )}
                            {links.linkedin && (
                                <Link
                                    href={links.linkedin.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <LinkedinIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.linkedin.label}
                                    </span>
                                </Link>
                            )}
                            {links.phone && (
                                <Link
                                    href={links.phone.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <PhoneIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.phone.label}
                                    </span>
                                </Link>
                            )}
                            {links.website && (
                                <Link
                                    href={links.website.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <WebIcon className="w-7 h-7" />
                                    <span className="ml-2">
                                        {links.website.label}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
                {skills.length > 0 && (
                    <div>
                        <Header
                            className="font-semibold"
                            type={HeaderType.H2}
                            underline={
                                <Divider
                                    className="w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                    spacing={DividerSpacing.None}
                                />
                            }
                        >
                            Skills
                        </Header>
                        <div className="mt-4">
                            {skills.map((skill, index) => (
                                <div key={`skill-${index}`}>{skill}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerticalProfile;
export { VerticalProfile, VerticalProfileWidth };
