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
  const [overlay, setOverlay] = useState(false);
  console.log(userDetails);
  return (
    <AppContext.Provider
      value={{ userDetails, setUserDetails, overlay, setOverlay }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
