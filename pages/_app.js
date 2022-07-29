import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
