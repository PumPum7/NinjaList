import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import Layout from "@/components/Layout";

import SEO from "../../next-seo.config";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
