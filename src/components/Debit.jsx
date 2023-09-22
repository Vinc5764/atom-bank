import Image22 from "../assets/image 22.png";
import arrow from "../assets/arrow.svg";

const Debit = () => {
  return (
    <div className="m:flex-col s:ml-[-3rem]  s:w-[27rem] s:flex-col m:pt-[2rem] m:mb-[20rem] s:mt-[2rem] flex gap-[2rem] lg:mt-[8rem]">
      <div>
        <img src={Image22} alt="Easy banking" />
      </div>
      <div className="flex max-h-[14rem] max-w-[39rem] flex-col items-start">
        <div className="flex-col py-[4rem]">
          <h2 className="s:text-[2rem] mb-[2.5rem] max-h-[2.9rem] max-w-[35.3rem] text-[2.5rem]">
            Customable Debit Card
          </h2>
          <p className="m:text-[2rem] s:text-[1.5rem] pt-8  text-Text2">
            Choose a debit card design that suits you. Practically withdraw cash
            and transact worldwide.
          </p>
        </div>
        <div className="flex gap-[2rem]">
          <p className="m:text-[2rem] s:text-[1.3rem] text-Text3">Learn More</p>
          <img className="w-[2rem]" src={arrow} alt="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Debit;
