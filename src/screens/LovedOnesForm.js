import SubmitBtn from "../assets/UI Images/BUtton_.png";
import PurpleTone from "../assets/UI Images/Purple tone.png";
import GoldFlakes from "../assets/UI Images/Asset 1.png";
import YellowBalloon from "../assets/UI Images/Balloon.png";
import { useContext, useState } from "react";
import AppContext from "../contexts/appContext";
import { useNavigate } from "react-router-dom";

const LovedOnesFrom = () => {
  const [inviteeName, setInviteeName] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("male");
  const [warning, setWarning] = useState(null);

  const { userDetails, setUserDetails } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if (!(age >= 0 && age < 100)) {
      setWarning("Please Enter a Valid Age");
      return;
    } else if (inviteeName.length > 30) {
      setWarning("Length of the name should be lessthan 30 characters");
      return;
    } else {
      setUserDetails({
        ...userDetails,
        inviteeName: inviteeName,
        age: age,
        gender: gender,
      });
      navigate("/details");
    }
  };
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-white font-bold pb-2 text-center">Their Name</h1>
      <div className="relative z-10">
        <input
          className="rounded-full h-[40px] py-1 px-5 mb-3 w-[80vw]"
          type="name"
          name="name"
          placeholder="XXXXXXXXXXXX"
          autocomplete="off"
          value={inviteeName}
          onChange={(e) => setInviteeName(e.target.value)}
        />
        <h1 className="text-white font-bold pb-2 text-center">
          How old They'll be this birthday
        </h1>
        <input
          className="rounded-full h-[40px] py-1 px-5 mb-3 w-[80vw]"
          type="number"
          name="name"
          placeholder="Your Age"
          autocomplete="off"
          min="1"
          max="100"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <h1 className="text-white font-bold pb-2 text-center">Gender</h1>
        <select
          name="gender"
          id="gender"
          className="rounded-full h-[40px] py-1 px-5 mb-3 w-[80vw]"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="flex justify-center py-4">
          <button
            disabled={!(age >= 0 && age < 100 && !inviteeName?.length < 30)}
            className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold ${
              !(age >= 0 && age < 100 && inviteeName?.length > 30)
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={handleClick}
          >
            Proceed
          </button>
        </div>
      </div>
      <div>
        <img
          className="absolute left-[20px] bottom-[10px] scale-[0.6]"
          src={PurpleTone}
          alt="music-icon"
        />
        <img
          className="absolute left-[-33px] top-[32vh] scale-[0.6] z-0"
          src={GoldFlakes}
          alt="music-icon"
        />
        <img
          className="absolute right-[7px] top-[30vh] scale-[0.5]"
          src={YellowBalloon}
          alt="music-icon"
        />
      </div>
    </div>
  );
};

export default LovedOnesFrom;
