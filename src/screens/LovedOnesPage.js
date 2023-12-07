import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import GiftCap from "../assets/UI Images/Cap&Gift.png";
import LovedOnesFrom from "./LovedOnesForm";
import { useContext } from "react";
import AppContext from "../contexts/appContext";
import Toast from "../components/Toast";
const LovedOnesPage = () => {
  const { showToast } = useContext(AppContext);

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
      {showToast && (
        <div className="absolute top-5 toast-align block text-center">
          <Toast />
        </div>
      )}
    </div>
  );
};

export default LovedOnesPage;
