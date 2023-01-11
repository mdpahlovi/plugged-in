import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = ({ children }) => {
    return (
        <>
            <Head>
                <title>Plugged In | Record Everything Online</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Main;
