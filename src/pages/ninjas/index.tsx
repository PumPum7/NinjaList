import { GetStaticProps } from "next";

import NinjaListing from "@components/NinjaListing";
import { Ninja } from "@interfaces";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();

    return {
        props: {
            ninjas: data,
        },
    };
};

interface Ninjas {
    ninjas: Ninja[];
}

export default function Ninjas({ ninjas }: Ninjas) {
    return (
        <>
            <Head>
                <title>Ninja List | All Ninjas</title>
            </Head>
            <div>
                <h1 className="text-center text-2xl">All Ninjas</h1>
                {ninjas.map((ninja) => (
                    <NinjaListing ninja={ninja} key={ninja.id} />
                ))}
            </div>
        </>
    );
}
