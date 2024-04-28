"use client";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../lib/motion";
import Image from "next/image";
import { Meteors } from "./ui/meteors";

const ExperienceCard = ({ experience }: any) => (
    <VerticalTimelineElement
        visible={true}
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <Image
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[80%] h-[80%] object-contain rounded-3xl"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">
                {experience.title}
            </h3>
            <p
                className="text-sec text-[16px] font-semibold"
                style={{ margin: 0 }}
            >
                {experience.company_name}
            </p>
        </div>
        <div className=" w-full relative ">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point: any, index: any) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
            </div>
        </div>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mt-20">
                <p className="sm:text-[18px] text-[14px] text-sec uppercase tracking-wider">
                    What I have done so far
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Work Experience
                </h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor="">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
