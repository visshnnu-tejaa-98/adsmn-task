import Happy from "../assets/UI Images/Icons/Happy.png";
import Romantic from "../assets/UI Images/Icons/Romantic.png";
import Funny from "../assets/UI Images/Icons/Funny.png";
import Motivational from "../assets/UI Images/Icons/Motivational.png";
import Calm from "../assets/UI Images/Icons/Calm.png";
import Rap from "../assets/UI Images/Icons/Rap.png";
import Rock from "../assets/UI Images/Icons/Rock.png";
import Pop from "../assets/UI Images/Icons/Pop.png";
import Desi from "../assets/UI Images/Icons/Desi.png";
import EDM from "../assets/UI Images/Icons/EDM.png";
import Male from "../assets/UI Images/Icons/Male.png";
import Female from "../assets/UI Images/Icons/Female.png";
import { useContext, useState } from "react";
import OpenAI from "openai";
import AppContext from "../contexts/appContext";
import { useNavigate } from "react-router-dom";
const Selections = ({}) => {
  const [mood, setMood] = useState(null);
  const [genre, setGenre] = useState(null);
  const [singerVoice, setSingerVoice] = useState(null);
  const [warning, setWarning] = useState(null);
  const [loading, setLoading] = useState(false);

  const { userDetails, setUserDetails } = useContext(AppContext);
  const navigate = useNavigate();
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleClick = () => {
    setLoading(true);
    if (!mood || !genre || !singerVoice) {
      setWarning(`Please Select Mood, Genre and Singer Voice`);
      return;
    }
    setUserDetails({
      ...userDetails,
      mood: mood,
      genre: genre,
      singerVoice: singerVoice,
    });
    let dataToChatGpt = `
    Wish a happy birthday to ${userDetails.inviteeName}.\n
    Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.

    Using the above information, please write 16 lines of ${
      userDetails.genre
    } lyrics that I can dedicate to ${
      userDetails.gender === "male" ? "him" : "her"
    } for ${
      userDetails.gender === "male" ? "him" : "her"
    } birthday. Each line can have maximum of 8 words or 40 characters.
    
    The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.
    `;
    getData(dataToChatGpt);
  };

  const getData = async (dataToChatGpt) => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: dataToChatGpt }],
      model: "gpt-3.5-turbo",
    });
    setUserDetails({
      ...userDetails,
      lyrics: completion.choices[0]?.message?.content,
    });
    setLoading(false);
    navigate("/lyrics");
  };
  const data = [
    {
      title: "Mood",
      icons: [
        { icon_url: Happy, icon_name: "Happy" },
        { icon_url: Romantic, icon_name: "Romantic" },
        { icon_url: Funny, icon_name: "Funny" },
        { icon_url: Motivational, icon_name: "Motivational" },
        { icon_url: Calm, icon_name: "Calm" },
      ],
    },
    {
      title: "Genre",
      icons: [
        { icon_url: Rap, icon_name: "Rap" },
        { icon_url: Rock, icon_name: "Rock" },
        { icon_url: Pop, icon_name: "Pop" },
        { icon_url: Desi, icon_name: "Desi" },
        { icon_url: EDM, icon_name: "EDM" },
      ],
    },
  ];
  let singer = {
    title: "Singer's Voice",
    icons: [
      { icon_url: Male, icon_name: "Male" },
      { icon_url: Female, icon_name: "Female" },
    ],
  };
  return (
    <div>
      {data &&
        data.map((tile) => (
          <div className="my-3" key={tile.title}>
            <div className="bg-[#E7B561] rounded-t-lg">
              <p className="text-center font-bold">{tile.title}</p>
            </div>
            <div className="border-solid border-2 border-[#E7B561] rounded-b-lg ">
              <div className="grid grid-cols-5 gap-1">
                {tile.icons.map((icon, idx) => (
                  <div key={idx}>
                    <div
                      className={`text-center bg-white hover:bg-[#E3B574] apple w-[3.4rem] h-[3.4rem] relative rounded-full mx-2 mt-2 flex justify-center items-center ${
                        mood === icon.icon_name.toLowerCase() && "bg-[#E3B574]"
                      } ${
                        genre === icon.icon_name.toLowerCase() && "bg-[#E3B574]"
                      }`}
                      onClick={
                        tile.title === "Mood"
                          ? () => setMood(icon.icon_name.toLowerCase())
                          : () => setGenre(icon.icon_name.toLowerCase())
                      }
                    >
                      <img
                        className={`text-white absolute h-[60px] flex justify-center items-center ${
                          tile?.title === "Mood" ? "scale-[0.6]" : "scale-[0.9]"
                        } 
                        `}
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
        ))}
      <div className="my-3">
        <div className="bg-[#E7B561] rounded-t-lg">
          <p className="text-center font-bold">{singer.title}</p>
        </div>
        <div className="border-solid border-2 border-[#E7B561] rounded-b-lg ">
          <div className="flex justify-around gap-1">
            {singer.icons.map((icon) => (
              <div>
                <div
                  className={`text-center bg-white hover:bg-[#E3B574] apple w-[6rem] h-[3.4rem] relative rounded-lg mx-2 mt-2 flex justify-center items-center ${
                    singerVoice === icon.icon_name.toLowerCase() &&
                    "bg-[#E3B574]"
                  }`}
                  onClick={() => setSingerVoice(icon.icon_name.toLowerCase())}
                >
                  <img
                    className={`text-white absolute h-[60px] flex justify-center items-center ${
                      singer?.title === "Mood" ? "scale-[0.6]" : "scale-[0.9]"
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
      <div className="text-center mt-5 mb-7">
        <div className="block">
          {}
          {loading ? (
            <button
              className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold ${
                !mood || !genre || !singerVoice
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={!mood || !genre || !singerVoice}
              onClick={handleClick}
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-[#320071] animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <button
              className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold ${
                !mood || !genre || !singerVoice
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={!mood || !genre || !singerVoice}
              onClick={handleClick}
            >
              Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selections;
