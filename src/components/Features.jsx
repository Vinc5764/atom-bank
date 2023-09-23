import Phone from "../assets/Phone.png";
import { Link } from "react-scroll";
import Image from "../assets/image 23.png";
import arrow from "../assets/arrow.svg";

const Features = () => {
  return (
    <div className="s:mt-[3rem] m:mt-[20rem] m:mx-8 mt-20" id="Features">
      <div className="flex flex-col items-center justify-between gap-5 px-4 py-24 md:flex-row-reverse lg:px-12">
        <div className="s:pt-[1rem]  flex w-[51rem] md:relative md:mb-[28rem] md:w-1/2">
          <img
            className="s:hidden m:hidden inset-0 w-[51rem] md:absolute  md:z-[1] lg:h-[31rem]"
            src={Image}
            alt={`Image of the desktop app`}
          />
          <img
            className="s:w-[23rem] m:mt-[-15rem] s:ml-[16rem] m:ml-[6rem] m:w-[25rem] inset-0 md:absolute md:z-[2] md:w-[18rem] md:shrink lg:ml-[8.5rem]"
            src={Phone}
            alt={`Image of the mobile app`}
          />
        </div>
        <div className="s:-mt-30 m:mt-[20rem] s:ml-[12rem] m:ml-8">
          <h1 className="s:text-[2.25rem] m:mt-[-16rem] m:text-[2.25rem] mt-[2rem] w-[35rem] md:text-[3.5rem]">
            Easy Way to <br className="m:hidden s:hidden" />
            Save your Money with{" "}
            <span className="border-b-4 border-Text3">
              <b>Atom</b>Bank
            </span>
          </h1>
          <p className="m:w-10/12 s:text-[1.5rem] m:text-[2rem] my-[2.5rem] text-[0.752rem] text-Text2 md:w-[29rem]">
            The best place to transact and save money.We make all payments
            easier and simpler. Receive and send payment funds without cash.
          </p>
          <div className="flex">
            <button
              className="btn-primary h-[3.25rem] w-[8rem] text-white"
              onClick={onclick}
            >
              Download
            </button>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Services"
              className="my-4 ml-[2.5rem] flex cursor-pointer text-Text2"
            >
              <span className="m:text-[1.3rem] mr-[0.5rem] text-[1.5rem]">
                See How It Works
              </span>
              <img
                className="s:w-[2rem]"
                src={arrow}
                alt="redirecting you to the service section"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
