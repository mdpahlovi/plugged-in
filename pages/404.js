import Image from "next/image";
import Link from "next/link";
import { Button, ButtonOutline } from "../components/Buttons";
import Logo from "../public/logo/logo.png";
import ErrorImg from "../public/images/ErrorImg.png";

const ErrorPage = () => {
    return (
        <div className="container h-screen grid items-center">
            <div className="text-center space-y-4">
                <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
                <h1>Oops! Page not found</h1>
                <p>Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
                <div className="w-max mx-auto pt-2">
                    <Link href="/">
                        <ButtonOutline>Back to Homepage</ButtonOutline>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
