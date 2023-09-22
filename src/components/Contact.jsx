import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Submitted:", email);
  };

  return (
    <div className="m:h-[17rem]  s:w-[39rem] bg-Tertiary lg:mb-[-2rem] lg:h-[16rem] ">
      <div>
        <div className="flex-col items-center justify-center">
          <div className="m:pt-8 lg:pt-[2rem]">
            <h1 className="text-center text-[2.5rem]">Subscribe Newsletter</h1>
            <p className="m:text-[1.3rem] s:text-[1.3rem] py-4 text-center">
              Financial transactions remotely using mobile
            </p>
          </div>
          <div className="m:ml-8 mt-[2.5rem] flex h-[3.25rem] w-[39rem] justify-center gap-10 md:ml-[20rem] lg:ml-[10rem]">
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email"></label>
              <input
                className="h-[3.25rem] w-[28rem] rounded-[0.75rem] px-8 py-4"
                type="text"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </form>
            <button className="btn-primary m:text-[1.23rem]  text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
