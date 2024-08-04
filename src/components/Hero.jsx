import React from "react";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import Section from "./Section";
const Hero = () => { 
  const parallaxRef = useRef(null);
  return (
    <div
      className="pt-32 mt-4"
      // crosses
      // crossesOffset="lg:translate-y-[5.25rem]"
      // customPaddings
      id="hero"
    >
      <div
        className="container relative overflow-hidden lg:overflow-visible"
        ref={parallaxRef}
      >
        {" "}
        {/* Changed overflow-hidden to overflow-visible */}
        <div className="relative overflow-visible break-words z-1 max-w-36xl md:max-w-5xl px-6 md:px-15 lg:ml-20 text-center mb-12 md:mb-20 lg:pt-28 lg:mb-12">
          <h1 className="h1 md:pl-[100px] break-words capitalize text-4xl md:text-5xl mb-1 lg:max-w-[1100px]">
            Turbocharged Tech: F1 Excitement.
            <p className="text-sm md:text-base">
              {/* this is my persnoal blog where i post about f1 , web dev and tech. */}
              "Welcome to my blog, where F1 thrills, web dev trends, and tech
              innovations collide!"
            </p>
          </h1>
          <ButtonGradient />
        </div>
        <div className="relative z-0 max-w-3xl mx-auto text-center lg:my-1 mb-16 md:mb-20 lg:mb-32">
          <h1 className="h5 break-normal relative z-2 max-w-2xl text-center mb-8 md:mb-20 lg:mb-4 lg:pl-[95px]">
            Join the CLUB.
          </h1>
          <Button
            className
            href="https://www.instagram.com/direct/t/17847211670992768/"
            white
          >
            Get started
          </Button>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
        {/* <Gradient /> */}
        <BottomLine />
      </div>
    </div>
  );
};

export default Hero;
