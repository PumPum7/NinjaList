import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import ThemeChanger from "@components/ThemeChange";

export default function Navbar() {
    const [logo, setLogo] = useState<string>("light");

    return (
        <nav className="flex content-end items-end mb-6 mt-3 mx-auto border-gray-100 border-b-1">
            <Link href={"/"}>
                <a className="mr-auto">
                    {logo === "light" ? (
                        <Image
                            src={"/logo.png"}
                            width={128}
                            height={77}
                            alt={"Website logo"}
                        />
                    ) : (
                        <Image
                            src={"/logo-white.png"}
                            width={128}
                            height={77}
                            alt={"Website logo"}
                        />
                    )}
                </a>
            </Link>
            <NavbarItem
                category={"Home"}
                linkTo={"/"}
                classNames="hidden md:block"
            />
            <NavbarItem category={"About"} linkTo={"/about"} />
            <NavbarItem category={"Ninja Listing"} linkTo={"/ninjas"} />
            <ThemeChanger changeLogo={(theme: string) => setLogo(theme)} />
        </nav>
    );
}

export function NavbarItem({
    category,
    linkTo,
    classNames = "",
}: {
    category: string;
    linkTo: string;
    classNames?: string;
}): JSX.Element {
    return (
        <Link href={linkTo}>
            <a className={`ml-4 ` + classNames}>{category}</a>
        </Link>
    );
}
