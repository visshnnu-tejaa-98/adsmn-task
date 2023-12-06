import ProgressBar0 from "../assets/UI Images/progress bar0.png";
import ProgressBar1 from "../assets/UI Images/progress bar1.png";
import ProgressBar2 from "../assets/UI Images/progress bar2.png";
import ProgressBar3 from "../assets/UI Images/progress bar3.png";
import ProgressBar4 from "../assets/UI Images/progress bar4.png";
import ProgressBar5 from "../assets/UI Images/progress bar5.png";
const ProgressBar = ({ step }) => {
  const progressBar = {
    0: ProgressBar0,
    1: ProgressBar1,
    2: ProgressBar2,
    3: ProgressBar3,
    4: ProgressBar4,
    5: ProgressBar5,
  };
  return (
    <div className="w-[65%] mx-auto">
      <img src={progressBar[step]} alt={"step-1"} className="my-4" />
    </div>
  );
};

export default ProgressBar;
