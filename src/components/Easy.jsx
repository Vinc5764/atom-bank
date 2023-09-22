import Image18 from "../assets/Image 18.png";
import Play from "../assets/Play.svg";
import Apple from "../assets/Apple.svg";

const Easy = () => {
  return (
    <div className="m:flex-col s:w-[27rem] s:flex-col m:mb-[24rem] s:ml-[-3rem] flex gap-[2rem]">
      <div className="">
        <img className="" src={Image18} alt="Easy banking" />
      </div>
      <div className=" flex max-h-[16rem] max-w-[40rem] flex-col items-start justify-between">
        <div className="py-[4rem]">
          <h2 className="m:text-[2.5rem]  s:text-[2rem] max-w-[35.3rem] pb-[2.5rem] md:text-[2.5rem]">
            AtomBank App for Your Easy
          </h2>
          <p className="m:text-[2rem] s:text-[1.5rem] text-Text2 md:max-h-[4.5rem] md:max-w-[40rem] md:text-[1rem]">
            The best place to transact and save money. More organized finances
            no longer a discourse. Enjoy the life you want, without wasting time
            on unnecessary financial matters
          </p>
        </div>
        <div className="flex gap-4">
          <img src={Play} alt="Google Play Store" />
          <img src={Apple} alt="Apple Store" />
        </div>
      </div>
    </div>
  );
};

export default Easy;
