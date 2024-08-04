import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Headings";
import PricingList from "./fonelist";
import { LeftLine, RightLine } from "./design/Pricing";
import { maxf1 } from "../assets";
const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="formula2">
      <div className="container relative z-2">
        <div className="hidden relative justify-center lg:-ml-[50px] lg:top-[-85px] mb-[6.5rem] lg:flex">
          <img
            src={maxf1}
            className="relative z-1"
            width={300}
            height={250}
            alt={maxf1 ? "maxf1" : "smallSphere"}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading className="lg:ml-[490px]" tag="Sports" title="Formula 1" />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10 lg:mb-20">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href=""
          >
            See the full details
          </a>
        </div>
      <div className="w-[19rem] max-lg:w-full h-2 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"></div>
      </div>
    </Section>
  );
};

export default Pricing;
