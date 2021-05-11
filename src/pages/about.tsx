import Head from "next/head";
import { Header1 } from "@components/Text/Header1";

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name={"keywords"} content={"about"} />
            </Head>
            <div>
                <Header1 headerText={"About"} />
                <p>
                    This is a learning project based on{" "}
                    <a
                        className="text-blue-500 underline"
                        href={
                            "https://www.youtube.com/watch?v=A63UxsQsEbU&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw"
                        }>
                        a YouTube guide
                    </a>{" "}
                    by The Net Ninja.
                </p>
            </div>
        </>
    );
};

export default About;
