import React, { useEffect } from "react";
import Section from "../components/Section";
// import { BottomLine } from "../components/design/Hero";

const Tech = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Twitter widgets script loaded successfully.");
    };

    script.onerror = () => {
      console.error("Error loading Twitter widgets script.");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section>
      <div className="container relative mx-auto lg:my-20 p-4" id="Tech">
        <h1 className="text-3xl font-bold mb-5">Twitter Timeline</h1>
        <a
          className="twitter-timeline lg:mb-80"
          href="https://twitter.com/f1?ref_src=twsrc%5Etfw"
          data-theme="light" // Optional: Customize appearance
          data-link-color="#1DA1F2" // Optional: Customize link color
        >
          Tweets by @enzofordddddd , @F1
        </a>
        <div className=" w-[19rem] max-lg:w-full h-2 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"></div>
      </div>
      {/* <BottomLine/> */}
    </Section>
  );
}; 

export default Tech;
