import { useState, useEffect } from "react";
import Group from "../assets/Group.png";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 w-full">
      <nav
        className={`bg-bgFirst px-4 py-4 lg:px-12 ${
          isSticky ? "bgFirst sticky left-0 right-0 top-0 " : ""
        }`}
      >
        <div className="flex  items-center justify-between">
          <div className="flex p-2">
            <img
              className="m:mt-[1.4rem] m:w-[4rem] m-2 h-11 w-11"
              src={Group}
            />
            <h2 className="m:ml-[-1.5rem] s:text-[1.5rem] m:text-[2rem] m-4 w-40 ">
              <span className="font-bold">Atom</span>Bank
            </h2>
          </div>

          <div className="hidden gap-3 lg:inline-flex">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Services"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Features"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Features
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Pricing"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="AboutUs"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              About Us
            </Link>
          </div>

          <div className="hidden gap-8 lg:flex">
            <button
              className=" h-[3.25] w-[6rem] rounded-xl bg-Tertiary"
              onClick={onclick}
            >
              Log In
            </button>
            <button
              className="btn-primary h-[3.25rem] w-[8rem] text-white"
              onClick={onclick}
            >
              Register
            </button>
          </div>

          <button onClick={toggleMenu} className="h-8 w-8 lg:hidden">
            <HiMenu />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 h-[27rem]  flex-col gap-[3rem] rounded-lg bg-Tertiary p-4 text-[1.7rem] text-primary">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Services"
              className="block py-2 hover:text-gray-400"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Features"
              className="block py-2 hover:text-gray-400"
            >
              Features
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Pricing"
              className="block py-2 hover:text-gray-400"
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="AboutUs"
              className="block py-2 hover:text-gray-400"
            >
              About Us
            </Link>
            <div className="py-4">
              <button
                className=" mb-[1rem] h-[3.25] w-[6rem] rounded-xl bg-white"
                onClick={onclick}
              >
                Log In
              </button>
              <br />
              <button
                className=" btn-primary h-[3.25] w-[8rem] rounded-xl text-white"
                onClick={onclick}
              >
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
