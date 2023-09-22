import Easy from "../components/Easy";
import Future from "../components/Future";
import Debit from "../components/Debit";

const Services = () => {
  return (
    <div className="mx-[10rem] my-[10rem] flex-col gap-[6rem]" id="Services">
      <Easy />
      <Future />
      <Debit />
    </div>
  );
};

export default Services;
