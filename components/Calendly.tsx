"use client";
import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

const Calendly = () => {
    const [widgetWidth, setWidgetWidth] = useState("100%");

    useEffect(() => {
        function handleResize() {
            const newWidth = window.innerWidth >= 778 ? "50%" : "100%";
            setWidgetWidth(newWidth);
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="sm:px-16 px-6 sm:py-16 py-10 text-center" id="calendly">
            <h1 className="pb-4  font-bold tracking-tight text-4xl lg:text-4xl">
                Need a Full-Stack Developer for Your Project?
                <br /> Let&apos;s Discuss Your Requirements!
            </h1>
            <div className="flex items-center justify-center">
                <div className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <div className=" mt-10 flex justify-center">
                <InlineWidget
                    url="https://calendly.com/irfanfaraaz03/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
                    styles={{
                        height: "775px",
                        width: widgetWidth,
                    }}
                />
            </div>
        </div>
    );
};
export default Calendly;
