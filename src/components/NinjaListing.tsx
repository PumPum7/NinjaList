import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Ninja } from "@interfaces";

export const NinjaListing = ({ ninja }: { ninja: Ninja }): JSX.Element => {
    return (
        <div
            className={
                "mx-1 my-6 px-8 py-10 bg-white border-l-8 hover:border-blue-600 border-white rounded-md"
            }>
            <Link href={`/ninjas/${ninja.id}`}>
                <a className="block">
                    <h2 className="flex items-center text-xl">
                        <Image
                            src={`https://picsum.photos/seed/${ninja.username}/75`}
                            alt={"Profile Picture Placeholder"}
                            width={75}
                            height={75}
                            className={"rounded-full"}
                        />
                        <span className={"ml-4"}>{ninja.name}</span>
                    </h2>
                </a>
            </Link>
        </div>
    );
};
export default NinjaListing;
