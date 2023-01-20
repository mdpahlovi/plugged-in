import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Buttons";
import Logo from "../public/logo/logo.png";
import ErrorImg from "../public/images/ErrorImg.png";

const ErrorPage = () => {
    return (
        <div className="w-screen h-screen grid grid-cols-2 items-center container">
            <div>
                <div className="mb-10 lg:mb-20">
                    <Link href="/" className="navbar-start w-max">
                        <Image src={Logo} alt="logo" width={160} />
                    </Link>
                </div>
                <div className="mb-10 md:mb-20 font-light">
                    <h1 className="font-black uppercase text-3xl text-left lg:text-5xl mb-10">You seem to be lost!</h1>
                    <p>The page you&apos;re looking for isn&apos;t available.</p>
                    <p>Try searching again or use the Go Back button below.</p>
                </div>
                <div className="mb-20 md:mb-0">
                    <Link href="/">
                        <Button>Go Back Home</Button>
                    </Link>
                </div>
            </div>

            <Image src={ErrorImg} alt="" />
        </div>
    );
};

export default ErrorPage;
