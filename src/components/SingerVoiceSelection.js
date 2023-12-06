import Male from "../assets/UI Images/Icons/Male.png";
import Female from "../assets/UI Images/Icons/Female.png";
import { useState } from "react";
const SingerVoiceSelection = () => {
  let tile = {
    title: "Singer's Voice",
    icons: [
      { icon_url: Male, icon_name: "Male" },
      { icon_url: Female, icon_name: "Female" },
    ],
  };

  const [singerVoice, setSingerVoice] = useState(null);
  return (
    <div className="my-3">
      <div className="bg-[#E7B561] rounded-t-lg">
        <p className="text-center font-bold">{tile.title}</p>
      </div>
      <div className="border-solid border-2 border-[#E7B561] rounded-b-lg ">
        <div className="flex justify-around gap-1">
          {tile.icons.map((icon) => (
            <div className={``}>
              <div
                className={`text-center bg-white hover:bg-[#E3B574] apple w-[6rem] h-[3.4rem] relative rounded-lg mx-2 mt-2 flex justify-center items-center`}
                onClick={() => setSingerVoice(icon.icon_name.toLowerCase())}
              >
                <img
                  className={`text-white absolute h-[60px] flex justify-center items-center ${
                    tile?.title === "Mood" ? "scale-[0.6]" : "scale-[0.9]"
                  }`}
                  src={icon.icon_url}
                  alt={icon.icon_name}
                />
              </div>
              <p className="text-white text-[10px] text-center pt-1 pb-2">
                {icon.icon_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingerVoiceSelection;
