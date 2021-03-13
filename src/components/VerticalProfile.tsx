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
    sticky?: boolean;
    useGradient?: boolean;
    width: VerticalProfileWidth;
}

enum VerticalProfileWidth {
    "1/4" = "md:w-1/4",
    "1/3" = "md:w-1/3",
    "1/2" = "md:w-1/2"
}

const VerticalProfile: FC<IVerticalProfileProps> = ({
    person,
    sticky = false,
    useGradient = false,
    width = VerticalProfileWidth["1/3"]
}) => {
    const {
        firstName,
        lastName,
        links = null,
        position,
        profileImageData,
        skills = [],
        summary = null
    } = person;
    const classNames = new ClassNames(
        `md:h-full w-full md:min-w-vertical-profile ${width} ${
            useGradient
                ? "bg-gradient-to-br from-primary to-primary-darkest"
                : "bg-primary"
        } ${sticky ? "px-8 pb-8" : "p-8"} relative`
    );

    return (
        <div className={classNames.list()}>
            <div className={sticky ? "sticky md:top-4 py-4" : ""}>
                <Avatar
                    alt={`Headshot of ${firstName} ${lastName}`}
                    image={profileImageData}
                />
                <div className="relative mt-4 space-y-2 text-nav-text">
                    {/* Mobile Header */}
                    <Header className="flex-col items-center justify-center text-center md:hidden">
                        <div>
                            {firstName} {lastName}
                        </div>
                        <div>{position}</div>
                    </Header>

                    {/* Mobile Links */}
                    {Object.keys(links).length > 0 && (
                        <div className="flex justify-center mt-4 space-x-4 md:hidden">
                            {links.email && (
                                <Link
                                    href={links.email.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <EmailIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                            {links.twitter && (
                                <Link
                                    href={links.twitter.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <TwitterIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                            {links.facebook && (
                                <Link
                                    href={links.facebook.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <FacebookIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                            {links.instagram && (
                                <Link
                                    href={links.instagram.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <InstagramIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                            {links.linkedin && (
                                <Link
                                    href={links.linkedin.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                            {links.phone && (
                                <Link
                                    href={links.phone.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <PhoneIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                            {links.website && (
                                <Link
                                    href={links.website.link}
                                    openNewTab
                                    className="flex items-center"
                                >
                                    <WebIcon className="w-6 h-6 md:w-7 md:h-7" />
                                </Link>
                            )}
                        </div>
                    )}

                    {summary && (
                        <div>
                            <Header
                                className="hidden font-semibold md:block"
                                type={HeaderType.H3}
                                underline={
                                    <Divider
                                        className="hidden md:block w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                        spacing={DividerSpacing.None}
                                    />
                                }
                            >
                                Summary
                            </Header>
                            <p className="mt-4">{summary}</p>
                        </div>
                    )}

                    {/* Resume Download Links */}
                    <div>
                        <Header
                            className="hidden font-semibold md:block"
                            type={HeaderType.H3}
                            underline={
                                <Divider
                                    className="hidden md:block w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                    spacing={DividerSpacing.None}
                                />
                            }
                        >
                            Download
                        </Header>
                    </div>

                    {/* Desktop Links */}
                    {Object.keys(links).length > 0 && (
                        <div className="hidden md:block">
                            <Header
                                className="font-semibold tracking-wide"
                                type={HeaderType.H3}
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
                                className="hidden font-semibold md:block"
                                type={HeaderType.H3}
                                underline={
                                    <Divider
                                        className="hidden md:block w-24 h-0.75 ml-2 -mt-1 font-bold rounded bg-nav-text"
                                        spacing={DividerSpacing.None}
                                    />
                                }
                            >
                                Skills
                            </Header>
                            <div className="hidden mt-4 md:block">
                                {skills.map((skill, index) => (
                                    <div key={`skill-${index}`}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Download Link */}
            <div className="absolute flex items-center justify-end bottom-2 right-2 md:hidden text-nav-text">
                <DownloadIcon className="w-6 h-6" />
                <span className="ml-2">Download as PDF</span>
            </div>
        </div>
    );
};

export default VerticalProfile;
export { VerticalProfile, VerticalProfileWidth };
