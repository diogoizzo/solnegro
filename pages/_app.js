import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module/dist/TagManager";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: "GTM-K42BDVS" });
    }, []);
    return (
        <>
            <Head>
                <title>Sol Negro</title>
                <meta name="author" content="Diogo Izzo" />
                <meta
                    name="description"
                    content="O curso que irá devastar suas crenças"
                />
                <meta
                    name="keywords"
                    content="misticismo, alemanhã nazista, hitler, curso histórico, verdades, hitler não morreu"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
