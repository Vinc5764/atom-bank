import Group7 from "../assets/Group 7.png";
import Group8 from "../assets/Group 8.png";

const Pricing = () => {
  return (
    <div className="btn-primary m:ml-32 lg:ml-[10rem] s:ml-[4rem] s:w-[30rem] m:w-[31rem] md:ml-[4rem] md:w-[59rem] ">
      <div className="m:flex-col s:flex-col flex">
        <div className=" m:flex-col s:flex-col mt-8  flex justify-around text-white lg:mx-[5rem]">
          <div className="flex">
            <div className="m:flex-col s:flex-col mt-8 flex justify-center lg:w-[25rem] lg:flex-col">
              <img
                className=" m:ml-16 md:ml-8 lg:mt-[-7rem]"
                src={Group7}
                alt="secure banking"
              />
              <div className="m:mx-[2rem] m:text-2xl s:text-[1.5rem] mx-4">
                <p className="m:py-2 md:my-4">
                  Fast and secure cashless payments
                </p>
                <p>
                  Pay with AtomBank app, online, and in stores, and get added
                  speed security
                </p>
              </div>
            </div>
          </div>
          <div className="m:flex-col s:flex-col mt-8 flex lg:mt-[2rem] lg:w-[25rem] lg:flex-col">
            <img className="ml-8" src={Group8} alt="easy account access" />
            <div className="m:text-2xl s:text-[1.5rem] mb-8 ml-8  mr-8 lg:mb-24">
              <p className="my-4">Control over your account</p>
              <p>
                Your bank account lets you easily lock your card in the app.
                <br />
                and later reorder it with a tap of a button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
