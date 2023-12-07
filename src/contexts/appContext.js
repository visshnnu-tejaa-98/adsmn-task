import { createContext, useState } from "react";

const AppContext = createContext({
  name: null,
  email: null,
  phone: null,
  acceptTerms: false,
  promotionalContent: false,
  inviteeName: null,
  age: null,
  gender: "male",
  mood: null,
  genre: null,
  singerVoice: null,
  lyrics: null,
  overlay: false,
  showToast: false,
});

export const AppContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: null,
    email: null,
    phone: null,
    acceptTerms: false,
    promotionalContent: false,
    inviteeName: null,
    age: null,
    gender: "male",
    mood: null,
    genre: null,
    singerVoice: null,
    lyrics: null,
  });
  const [showToast, setShowToast] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [warning, setWarning] = useState(null);
  return (
    <AppContext.Provider
      value={{
        userDetails,
        overlay,
        showToast,
        warning,
        setOverlay,
        setShowToast,
        setUserDetails,
        setWarning,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
