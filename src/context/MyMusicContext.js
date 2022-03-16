import { useContext, createContext } from "react";

const MyMusicContext = createContext();

const MyMusicProvider = ({ children }) => {
  return <MyMusicContext.Provider>{children}</MyMusicContext.Provider>;
};

const useMyMusic = () => {
  const context = useContext(MyMusicContext);
  if (!context) {
    throw new Error("'useMyMusic' can only be called inside MyMusicContext");
  }
};
