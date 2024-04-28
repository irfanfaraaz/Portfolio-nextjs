"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/lib/motion";
import { services } from "@/constants";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const ServiceCard = ({ title, icon, index }: any) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <Image
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20] font-bold text-center">
                        {" "}
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};
const words =
    "Full Stack/WEB3 Developer and ML enthusiast with strong knowledge of systems software and algorithms. Proficient in NodeJs, NestJs, ExpressJs, MongoDB, NextJs, ReactJs and Ethereum Blockchain. Familiar with Unix/Linux and Windows environments and APIs. Knowledgeable in TCP /IP and network programming. Good implementation skills in C++, Java, JavaScript and Python. I excel in integrating APIs seamlessly into web applications, enhancing functionality and user experiences. My goal is to continue pushing boundaries and driving advancements in the tech landscape, all while delivering high-quality solutions that meet and exceed user expectations. Passion for innovation.";
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] mt-20 text-sec uppercase tracking-wider">
                    Introduction
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Overview
                </h2>
            </motion.div>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 max-w-3xl "
            >
                <TextGenerateEffect words={words} />
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
