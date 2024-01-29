import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContexType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContexType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default ThemeContext;
