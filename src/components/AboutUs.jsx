import Group from "../assets/Group.png";
import Line1 from "../assets/Line.png";
import Instagram from "../assets/InstagramLogo.svg";
import Facebook from "../assets/FacebookLogo.svg";

const AboutUs = () => {
  return (
    <div
      className="m:flex-col s:w-[39rem] mt-8 bg-primary md:min-w-[61rem]"
      id="AboutUs"
    >
      <div className=" m:text-[2rem] s:text-[1.4rem] s:px-[2rem] justify-center gap-[2rem]  pt-16 text-white md:flex md:w-full">
        <div className="m:justify-center  s: flex justify-center p-2">
          <img
            className="m:mt-6 m:w-[3.5rem] s:mb-[1rem] s:mt-[1rem] m-2 h-11 w-11"
            src={Group}
          />
          <h2 className="ml-[-1rem]  pt-[1rem]">
            <span className="font-bold">Atom</span>Bank
          </h2>
        </div>
        <div className="m:flex-col m:mb-4 m:text-center s:text-center s:mb-4 md:flex md:gap-[1rem] ">
          <div className="m:py-4">
            <h3>Lokasi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Kontak</h3>
            <p>Customer Service 0812 - 1234 -5678</p>
          </div>
          <div className="m:justify-center  s:py-4  m:flex m:py-4 lg:ml-[-5rem]">
            <div className="s:justify-center flex gap-2">
              <img src={Instagram} alt="Instagram" />
              <p>@atombank</p>
            </div>
            <div className="s:justify-center  flex  gap-2">
              <img src={Facebook} alt="Facebook" />
              <p>@atombank</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white">
        <img className="w-full px-16" src={Line1} alt="Line" />
        <p className="m:text-[2rem] s:text-[1.3rem] pt-4">HeyAnarda @2021</p>
      </div>
    </div>
  );
};

export default AboutUs;
