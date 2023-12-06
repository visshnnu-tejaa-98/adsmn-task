import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import AppContext from "../contexts/appContext";
import { useNavigate } from "react-router-dom";

const FinalLyrics = () => {
  const { userDetails, setUserDetails } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <ProgressBar step={4} />
      <div className="w-[80%] mx-auto">
        <h1 className="text-xl text-white font-bold pb-2 text-center ">
          Your Song Lyrics are ready!
        </h1>
        <div className="bg-white w-[100%] h-[65vh] my-5 px-5 pt-5 pr-3 rounded-3xl">
          <p className="h-[62vh] overflow-auto font-semibold text-lg">
            {userDetails.lyrics}
          </p>
        </div>
        <div className="mb=5">
          <button
            className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold `}
            onClick={() => navigate("/")}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalLyrics;
