import Head from "next/head";
import Link from "next/link";

import { Header1 } from "@components/Text/Header1";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name={"keywords"} content={"ninjas"} />
            </Head>
            <div>
                <Header1 headerText={"Ninja List"} />
                <p className="text-center text-gray-600 md:text-left">
                    Lorem, ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <p className="text-center text-gray-600 md:text-left">
                    Lorem ipsum dolor sit, ipsum dolor sit amet, consectetur
                    adipiscing elit
                </p>
                <Link href={"/ninjas/"}>
                    <a className="block mx-auto my-5 py-2 w-40 text-center text-white bg-blue-700 hover:bg-blue-900 rounded-md">
                        See Ninja Listing
                    </a>
                </Link>
            </div>
        </>
    );
}
