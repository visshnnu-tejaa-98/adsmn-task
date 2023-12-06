import YellowTone from "../assets/UI Images/Yellow tone.png";
import GoldFlakes from "../assets/UI Images/Asset 1.png";
import { useContext, useState } from "react";
import AppContext from "../contexts/appContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [warning, setWarning] = useState(null);

  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [recomendations, setRecomendations] = useState(false);

  const { userDetails, setUserDetails, setOverlay } = useContext(AppContext);

  const handleClick = () => {
    if (phone?.length !== 10) {
      setWarning("Please Enter a Valid Mobile Number");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      setWarning("Please Enter a Valid Email Address");
      return;
    } else if (name.length > 30) {
      setWarning("Length of the name should be lessthan 30 characters");
      return;
    }
    setUserDetails({
      ...userDetails,
      name: name,
      email: email,
      phone: phone,
      termsAndConditions: termsAndConditions,
      promotionalContent: recomendations,
    });
    setOverlay(true);
  };
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="font-bold pb-2 text-center text-white">
        Register To Create
      </h1>
      <div>
        <input
          className="rounded-full h-[40px] py-1 px-5 mb-3 w-[80vw]"
          type="number"
          name="mobile_number"
          placeholder="Mobile Number"
          autocomplete="off"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="rounded-full h-[40px] py-1 px-5 mb-3 w-[80vw]"
          type="name"
          name="user_name"
          placeholder="Full Name"
          autocomplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-full h-[40px] py-1 px-5 mb-3 w-[80vw]"
          type="email"
          name="email_id"
          placeholder="Email ID"
          autocomplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              value={termsAndConditions}
              onClick={() => setTermsAndConditions((prev) => !prev)}
            />
            <label className="text-white">
              I Accept Terms & Conditions and Privacy Policy of
              Mondelez(Cadbury)
            </label>
          </div>
          <br />
          <div className="flex items-center gap-2">
            <input
              type="radio"
              value={recomendations}
              onClick={() => setRecomendations((prev) => !prev)}
            />
            <label className="text-white">
              I would like to recieve Promotional communication from
              Mondelez(Cadbury) about its products and offers.
            </label>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <div className="text-center mt-5 mb-7">
            <div className="block">
              <button
                disabled={
                  !(
                    phone?.length === 10 &&
                    email.includes("@") &&
                    email.includes(".") &&
                    name.length < 30
                  )
                }
                className={`bg-[#E7B463] py-2 px-5 rounded-lg text-[#320071] font-bold  ${!(phone?.length ===
                  10 &&
                email.includes("@") &&
                email.includes(".") &&
                name.length < 30
                  ? "cursor-pointer"
                  : "cursor-not-allowed")}`}
                onClick={handleClick}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute right-[20px] bottom-[-65px] scale-[0.6]"
          src={YellowTone}
          alt="music-icon"
        />
        <img
          className="absolute left-[-33px] bottom-[-65px] scale-[0.6]"
          src={GoldFlakes}
          alt="music-icon"
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
