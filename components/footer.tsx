import { Linkedin, GitHub, Instagram, Mail, Twitter } from "react-feather";
import Link from "next/link";

export const Footer = () => {
    const links = [
        {
            href: "https://www.linkedin.com/in/syed-irfan-faraz-b95b34227/",
            icon: <Linkedin className="h-8 w-8" />,
        },
        {
            href: "https://twitter.com/irfan_faraaz7",
            icon: <Twitter className="h-8 w-8" />,
        },
        {
            href: "https://www.instagram.com/syed_irfan_faraaz/",
            icon: <Instagram className="h-9 w-9" />,
        },
        {
            href: "https://github.com/irfanfaraaz",
            icon: <GitHub className="h-10 w-10" />,
        },
        {
            href: "mailto:irfanfaraaz03@gmail.com",
            icon: <Mail className="h-8 w-8" />,
        },
    ];
    return (
        <div className="text-center pb-8">
            <div className="flex items-center justify-center space-x-4">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index}
                        className="hover:opacity-45 transition duration-300"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
            <p className="text-sm text-slate-100/50">irfanfaraaz03@gmail.com</p>
            <p className="text-sm text-slate-100/50">
                © Syed Irfan Faraz. All rights reserved.
            </p>
        </div>
    );
};
