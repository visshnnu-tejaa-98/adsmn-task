import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";

import Logo from "../assets/UI Images/Celebrations(Bg).png";
import RegistrationForm from "../components/RegistrationForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/appContext";

const RegistrationPage = () => {
  // const [overLay, setOverLay] = useState(false);
  const { overlay, setOverlay } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <ProgressBar step={0} />
      <div className="logo flex justify-center relative top-[-70px]">
        <img src={Logo} alt="logo" />
      </div>
      <div className="relative top-[-120px]">
        <RegistrationForm />
      </div>
      {overlay && (
        <div>
          <div className="">
            <div className="overlay"></div>
          </div>
          <div className="">
            <div className="w-[200px] h-[180px] bg-white absolute top-[calc(50vh-90px)] left-[calc(50vw-100px)] z-[10000] rounded-2xl p-2">
              <h1 className="text-center text-[#320071] font-bold text-xl">
                Enter OTP
              </h1>
              <div className="flex justify-between w-[80%] mx-auto py-2">
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                />
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                />
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                />
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                />
              </div>
              <p className="text-right mr-4 font-semibold text-sm text-[#320071] underline underline-offset-2">
                Resend OTP
              </p>
              <div className="text-center mt-3">
                <button
                  className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold`}
                  onClick={() => {
                    setOverlay(false);
                    navigate("/lovedones");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
