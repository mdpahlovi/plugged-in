import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = ({ children, href, page }) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li>
                    <Link href="/" className="gap-1.5">
                        <FaHome />
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={href}>{page}</Link>
                </li>
                {children}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
