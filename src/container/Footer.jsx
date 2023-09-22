import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

const Footer = () => {
  return (
    <div className="s:mt-[14rem] w-full flex-col">
      <Contact />
      <AboutUs />
    </div>
  );
};

export default Footer;
