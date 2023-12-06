import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import GiftCap from "../assets/UI Images/Cap&Gift.png";
import LovedOnesFrom from "./LovedOnesForm";
const LovedOnesPage = () => {
  return (
    <div>
      <Navbar />
      <ProgressBar step={1} />
      <h1 className="font-bold pb-2 py-2 text-center text-white">
        Tell us about your loved ones...
      </h1>
      <div className="logo flex justify-center ">
        <img src={GiftCap} alt="logo" />
      </div>
      <div className="">
        <LovedOnesFrom />
      </div>
    </div>
  );
};

export default LovedOnesPage;
