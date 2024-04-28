"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";

const Tech = () => {
    return (
        <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
            <InfiniteMovingCards
                items={technologies}
                direction="right"
                speed="normal"
            />
        </div>
    );
};

export default SectionWrapper(Tech, "");
