import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = ({ title, className, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Navbar />
            <main className={className}>{children}</main>
            <Footer />
        </>
    );
};

export default Main;
