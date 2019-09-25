import React, { createContext, useState } from "react";
import { theme } from "components/theme-provider";

const themeObjs = {
  light: {
    foreground: theme.colors.black,
    background: theme.colors.white
  },
  dark: {
    foreground: theme.colors.white,
    background: theme.colors.black
  }
};

interface IContext {
  theme: {
    foreground: string;
    background: string;
  };
  changeTheme?(theme: string): void;
}

export const ThemeContext = createContext<IContext>({ theme: themeObjs.light });

const ThemeContextProvider: React.FC = props => {
  const [theme, updateTheme] = useState(themeObjs.light);

  const changeTheme = (theme: string) => {
    switch (theme) {
      case "light":
        updateTheme(themeObjs.light);
        break;
      case "dark":
        updateTheme(themeObjs.dark);
        break;
      default:
        updateTheme(themeObjs.light);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
