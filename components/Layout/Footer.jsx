import Image from "next/image";
import LightLogo from "../../public/logo/light-logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-6 border-t divide-y">
            <div className="py-8 flex flex-col md:flex-row gap-4 md:justify-between">
                <div>
                    <Image src={LightLogo} alt="logo" width={100} />
                    <p className="mt-2">Online meeting recording application using nextJs</p>
                </div>
                <div className="flex flex-wrap gap-6 md:gap-12 justify-between">
                    <div className="flex flex-wrap md:flex-col gap-x-6 gap-y-1">
                        <div>Services</div>
                        <div>Terms & Condition</div>
                        <div>Privacy Policy</div>
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
        </footer>
    );
};

export default Footer;
