import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import GiftCap from "../assets/UI Images/Cap&Gift.png";
import Happy from "../assets/UI Images/Happy.png";
import Romantic from "../assets/UI Images/Romantic.png";
import Funny from "../assets/UI Images/Funny.png";
import Motivational from "../assets/UI Images/Motivational.png";
import Calm from "../assets/UI Images/Calm.png";
import Baloon from "../assets/UI Images/Balloon2.png";
import PurpleMusic from "../assets/UI Images/Purple Music Tone.png";
import GoldFlakes from "../assets/UI Images/Asset 1.png";
import Selections from "../components/Selections";

const DetailsPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <ProgressBar step={2} />
      <div className="">
        <h1 className="text-xl text-white font-bold pb-2 text-center w-[80%] mx-auto">
          What would you like their song's vibe to be?
        </h1>
        <div className="logo flex justify-center relative z-[10]">
          <img src={GiftCap} alt="logo" />
        </div>
        <div className="w-[90%] mx-auto z-10">
          <Selections />
        </div>
        <div>
          <img
            className="absolute right-0 top-[30vh] scale-[0.6]"
            src={Baloon}
            alt="Baloon"
          />
          <img
            className="absolute left-0 top-[40vh] scale-[0.6] -z-[0]"
            src={PurpleMusic}
            alt="PurpleMusic"
          />
          <img
            className="absolute right-[-30px] bottom-[-10px] scale-[0.6] z-0"
            src={GoldFlakes}
            alt="music-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
