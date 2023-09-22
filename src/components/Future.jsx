import Group6 from "../assets/Group 6.png";
import arrow from "../assets/arrow.svg";

const Future = () => {
  return (
    <div className="m:my-20 s:ml-[-3rem]  s:w-[27rem] s:mt-[18rem] s:flex-col m:flex-col flex gap-16 md:my-8 lg:mt-[14rem]">
      <div className="m:mb-[20rem] flex flex-col items-start md:max-h-[14rem] md:max-w-[39rem]">
        <div className="m:mt-[5rem] flex-col py-[4rem]">
          <h2 className="m:text-[2.5rem] s:text-[2rem]  mb-[2.5rem] max-h-[2.9rem] max-w-[35.3rem] md:text-[2.25rem]">
            <b>Atom</b>Bank for the Future
          </h2>
          <p className="m:text-[2rem] s:text-[1.5rem] m:pt-[3rem] max-h-[4.5rem] max-w-[35.3rem] text-Text2 lg:pt-[2rem]">
            All conveniences are at hand. It&apos;s time to go ahead and make
            dreams come true one by one. Open, manage and withdraw competitive
            interest savings without going to the bank.
          </p>
        </div>
        <div className="m:mt-[18rem] s:mt-[5rem] m:text-[2rem] flex gap-4 pt-[2rem]">
          <p className="s:text-[1.3rem] text-Text3">Learn More</p>
          <img
            className="m:w-[2rem] s:w-[1.5rem] hue-rotate-90"
            src={arrow}
            alt="Learn More"
          />
        </div>
      </div>
      <div className="md:mt-[2rem]">
        <img src={Group6} alt="Easy banking" />
      </div>
    </div>
  );
};

export default Future;
