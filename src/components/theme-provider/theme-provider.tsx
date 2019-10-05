import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    red: "#CE3A3A",
    white: "#FFFFFF",
    black: "#111111",
    grey: "#676767",
    lightGrey: "#B9B9B9"
  },
  fonts: {
    eina: {
      regular: "eina-regular"
    },
    druk: {
      heavy: "druk-heavy",
      super: "druk-super",
      medium: "druk-medium"
    }
  }
};

type themeType = typeof theme;

const ThemeProviderComponent = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export type ThemeType = themeType;
export default ThemeProviderComponent;
