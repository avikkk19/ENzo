import React from "react";
import Section from "../components/Section";
import Headings from "../components/Headings";
import { benefits } from "../constants";

const Projects = () => {
  return (
    <Section> 
      <div
        className="container  relative z-2 mt-20 lg:-mb-20 lg:mt-20  "
        id="projects"
      >
        <Headings className="" title="My projects." />
        <div className="flex lg:mb-52 flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <a
              href={item.href}
              className=" block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: item.backgroundUrl
                  ? `url(${item.backgroundUrl})` 
                  : "none",
              }}
              key={item.id}
            >
              <div className="relative   z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  onClick
                </p>
              </div>
            </a>
          ))}
        </div>
        {/* <div className="w-[19rem] max-lg:w-full h-2 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4"></div> */}
      </div>
    </Section>
  );
};

export default Projects;
