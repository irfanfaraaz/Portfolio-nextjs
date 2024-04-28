"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "@/lib/motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<{
        name: string;
        email: string;
        message: string;
    }>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: {
        name: string;
        email: string;
        message: string;
    }) => {
        if (!data.name) {
            alert("Please enter your name");
            return;
        }

        if (!data.email) {
            alert("Please enter your email");
            return;
        }

        if (!data.message) {
            alert("Please enter a message");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                "service_2e87ab8",
                "template_73nye1l",
                {
                    from_name: data.name,
                    to_name: "Faraaz",
                    from_email: data.email,
                    to_email: "irfanfaraaz03@gmail.com",
                    message: data.message,
                },
                "FQ_P3zvMY71q09Ro_"
            );

            setLoading(false);
            alert("Thank you for your message. I will get back to you soon.");
            reset();
        } catch (error) {
            alert("Sorry, something went wrong. Please try again later.");
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="   mt-40  lg:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className="sm:text-[18px] text-[14px] text-sec uppercase tracking-wider">
                    Get in touch
                </p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Contact.
                </h3>

                <form
                    className="mt-12 flex flex-col gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="name" className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            id="name"
                            {...register("name")}
                            type="text"
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <label htmlFor="email" className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Email
                        </span>
                        <input
                            id="email"
                            {...register("email")}
                            type="email"
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <label htmlFor="message" className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            id="message"
                            {...register("message")}
                            rows={7}
                            placeholder="What's do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto   md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
