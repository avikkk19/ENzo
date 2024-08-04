import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../constants";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { socials } from "../constants";
import React from "react";

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (url) => {
    if (url.startsWith("#")) {
      // Internal section links (smooth scroll)
      if (location.pathname === "/") {
        document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
        }, 100); // Adjust the delay if needed
      }
    } else {
      // Route navigation
      window.location.href = url;
    }
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border- border-n-6 lg:bg-neutral-950 lg:backdrop-blur-lg ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          ENzo
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center lg:ml-[505px]  m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => handleClick(item.url)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === window.location.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="https://x.com/messages/1717949583177744384-1717949583177744384?text="
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Twitter
        </a>
        <Button className="hidden lg:flex" href="#contact">
          Email us
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        <ButtonGradient />
      </div>
    </div>
  );
};

export default Nav;
