"use client";
import { navLinks } from "@/constants";
import { logo, menu } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Linkedin, GitHub, Instagram } from "react-feather";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sm:px-16 px-4 w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? "bg-pri" : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl max-auto p-2">
                <Link
                    href={"/"}
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain rounded-3xl"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Syed Irfan Faraz <span></span>{" "}
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/syed-irfan-faraz-b95b34227/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={20} />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/irfanfaraaz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub size={20} />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/syed_irfan_faraaz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram size={20} />
                        </a>
                    </li>
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${
                                active === Link.title
                                    ? "text-white"
                                    : "text-sec"
                            } hover:text-white text-[18px] font-medium`}
                            onClick={() => {
                                setActive(Link.title);
                            }}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    setActive(Link.title);
                                }
                            }}
                        >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end  items-center">
                    <Image
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                setToggle(!toggle);
                            }
                        }}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex  justify-end items-start flex-col gap-4">
                            <li
                                onClick={() => setToggle(!toggle)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        setToggle(!toggle);
                                    }
                                }}
                            >
                                <a
                                    href="https://www.linkedin.com/in/your-linkedin-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </li>

                            <li
                                onClick={() => setToggle(!toggle)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        setToggle(!toggle);
                                    }
                                }}
                            >
                                <a
                                    href="https://github.com/your-github-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHub size={20} />
                                </a>
                            </li>

                            <li
                                onClick={() => setToggle(!toggle)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        setToggle(!toggle);
                                    }
                                }}
                            >
                                <a
                                    href="https://www.instagram.com/your-instagram-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram size={20} />
                                </a>
                            </li>
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`${
                                        active === Link.title
                                            ? "text-white"
                                            : "text-sec"
                                    }font-poppins font-medium cursor-pointer text-[16] `}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(Link.title);
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            setToggle(!toggle);
                                            setActive(Link.title);
                                        }
                                    }}
                                >
                                    <a href={`#${Link.id}`}>{Link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
