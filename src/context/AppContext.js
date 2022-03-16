import { useContext, createContext, useState } from "react";
import useBackend from "../hooks/useBackend";

const AppContext = createContext({ children });

const AppProvider = () => {
  const [activePath, setActivePath] = useState("/login");
  const [spotifyUser, setSpotifyUser] = useState(null);

  const backend = useBackend((base_url = ""));

  const changeSpotifyUser = (user) => {
    if (user.keys.length !== 2 && user.name == false && user.id == false) {
      return;
    }
    setSpotifyUser(user);
    return spotifyUser;
  };

  class SpotifyUser {
    constructor(id) {
      userId = id;
    }
    authenticate() {
      self.userId;
    }
    get username() {}
  }

  return <AppContext.Provider>children</AppContext.Provider>;
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context == false) {
    throw Error("Component is not inside the AppContext provider");
  }
};

export { AppProvider, useApp };
