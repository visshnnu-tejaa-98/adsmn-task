import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";

import Logo from "../assets/UI Images/Celebrations(Bg).png";
import RegistrationForm from "../components/RegistrationForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/appContext";
import Toast from "../components/Toast";

const RegistrationPage = () => {
  const [otp, setOtp] = useState({
    digitOne: null,
    digitTwo: null,
    digitThree: null,
    digitFour: null,
  });
  const { overlay, setOverlay, showToast, setWarning, setShowToast } =
    useContext(AppContext);
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
                  value={otp.digitOne}
                  onChange={(e) => setOtp({ ...otp, digitOne: e.target.value })}
                />
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                  value={otp.digitTwo}
                  onChange={(e) => setOtp({ ...otp, digitTwo: e.target.value })}
                />
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                  value={otp.digitThree}
                  onChange={(e) =>
                    setOtp({ ...otp, digitThree: e.target.value })
                  }
                />
                <input
                  type="number"
                  min={0}
                  max={9}
                  className="text-white bg-[#320071] w-[2rem] h-[2.2rem] rounded-md font-bold p-1 text-center"
                  value={otp.digitFour}
                  onChange={(e) =>
                    setOtp({ ...otp, digitFour: e.target.value })
                  }
                />
              </div>
              <p className="text-right mr-4 font-semibold text-sm text-[#320071] underline underline-offset-2">
                Resend OTP
              </p>
              <div className="text-center mt-3">
                <button
                  className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold`}
                  onClick={() => {
                    if (
                      otp?.digitOne?.toString().length === 1 &&
                      otp?.digitTwo?.toString().length === 1 &&
                      otp?.digitThree?.toString().length === 1 &&
                      otp?.digitFour?.toString().length === 1
                    ) {
                      setOverlay(false);
                      navigate("/lovedones");
                    } else {
                      const myPromise = new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve("Toggle Toast");
                        }, 1500);
                      });
                      setShowToast(true);
                      setWarning("Please Enter a Valid OTP");
                      myPromise.then(() => setShowToast(false));
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showToast && (
        <div className="absolute top-5 toast-align block text-center">
          <Toast />
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
