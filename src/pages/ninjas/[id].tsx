import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { Ninja } from "@interfaces";
import { Header1 } from "@components/Text/Header1";

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data: Ninja[] = await res.json();

    const paths = data.map((ninja) => {
        return {
            params: {
                id: ninja.id.toString(),
            },
        };
    });
    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data: Ninja = await res.json();

    return {
        props: {
            ninja: data,
            image: `https://picsum.photos/seed/${data.username}/150`,
        },
    };
};

export default function Details({
    ninja,
    image,
}: {
    ninja: Ninja;
    image: string;
}): JSX.Element {
    return (
        <>
            <Head>
                <title>Ninja List | {ninja.name}</title>
            </Head>
            <div>
                <div className="text-center">
                    <Image
                        src={image}
                        alt={"Profile Picture Placeholder"}
                        width={125}
                        height={125}
                        className={"rounded-full"}
                    />
                </div>

                <Header1 headerText={ninja.name} />
                <div className="text-center">
                    <p>
                        Contact:{" "}
                        <a
                            href={`mailto:${ninja.email}`}
                            className="text-blue-500 underline">
                            {ninja.email}
                        </a>
                    </p>
                    <p>
                        Website:{" "}
                        <a
                            rel="nofollow"
                            referrerPolicy={"no-referrer"}
                            href={ninja.website}
                            className="text-blue-500 underline">
                            {ninja.website}
                        </a>
                    </p>
                    <p>City: {ninja.address.city}</p>
                </div>
            </div>
        </>
    );
}
