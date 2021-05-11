import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex content-end items-end mb-6 mt-3 mx-auto border-gray-100 border-b-1">
            <Link href={"/"}>
                <a className="mr-auto">
                    <Image
                        src={"/logo.png"}
                        width={128}
                        height={77}
                        alt={"Website logo"}
                    />
                </a>
            </Link>
            <NavbarItem category={"Home"} linkTo={"/"} />
            <NavbarItem category={"About"} linkTo={"/about"} />
            <NavbarItem category={"Ninja Listing"} linkTo={"/ninjas"} />
        </nav>
    );
}

export function NavbarItem({
    category,
    linkTo,
}: {
    category: string;
    linkTo: string;
}): JSX.Element {
    return (
        <Link href={linkTo}>
            <a className="ml-4">{category}</a>
        </Link>
    );
}
