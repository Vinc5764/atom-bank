import Group7 from "../assets/Group 7.png";
import Group8 from "../assets/Group 8.png";
import styles from "./background.module.css";

const Pricing = () => {
  return (
    <div
      className="btn-primary m:ml-32 ss:pr-8  s:h-[70rem]  s:ml-[4rem] ss:h-[70rem] s:w-[32rem] m:w-[31rem] m:h-[70rem] mx-8 flex "
      id="Pricing"
    >
      <div className={styles.background}>
        <div className=" m:flex-col s:flex-col s:pt-16  m:pt-16 mt-8 flex items-start  text-white lg:mx-[5rem]">
          <div className="m:flex-col s:flex-col ss:pt-16 m:pb-16 ss:pb-16 flex items-center">
            <img className=" m:ml-16" src={Group7} alt="secure banking" />
            <div className="m:mx-[2rem] ss:ml-[1rem] m:text-2xl s:ml-8 s:text-[1.5rem] leading-4 lg:mt-[-5rem]">
              <p className="m:py-2 my-4">Fast and secure cashless payments</p>
              <p className="s:leading-8">
                Pay with AtomBank app, online, and in stores, and get added
                speed security
              </p>
            </div>
          </div>
          <div className="m:flex-col s:pt-16 s:mx-8  ss:pt-8 s:flex-col flex items-center">
            <img className="ml-8" src={Group8} alt="easy account access" />
            <div className="m:text-2xl ss:ml-8  m:mx-8 s:text-[1.5rem] lg:mt-[-5rem]">
              <p className="my-4">Control over your account</p>
              <p>
                Your bank account lets you easily lock your card in the app.
                <br className="lg:hidden" />
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
