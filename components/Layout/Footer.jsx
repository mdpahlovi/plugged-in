import Image from "next/image";
import Logo from "../../public/logo/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="section-gap border-t">
            <div className="container mx-auto px-6 sm:px-8 divide-y">
                <div className="py-8 flex flex-col md:flex-row gap-4 md:justify-between">
                    <div>
                        <Image src={Logo} alt="logo" width={100} />
                        <p className="mt-2">Online meeting recording and media management application.</p>
                    </div>
                    <div className="flex flex-wrap gap-6 md:gap-12 justify-between">
                        <div className="flex flex-wrap md:flex-col gap-x-6 gap-y-1">
                            <div>Services</div>
                            <Link href="/terms_condition">Terms & Condition</Link>
                            <Link href="/privacy_policy">Privacy Policy</Link>
                            <div>FAQ</div>
                        </div>
                        <div>
                            <div className="hidden md:block">Follow us :</div>
                            <div className="flex justify-center text-2xl gap-6 md:mt-2">
                                <a href="">
                                    <FaFacebook />
                                </a>
                                <a href="">
                                    <FaGithub />
                                </a>
                                <a href="">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 text-center">Copyright © 2023 - All right reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
