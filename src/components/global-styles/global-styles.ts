import { createGlobalStyle, DefaultTheme } from "styled-components";
import { ThemeType } from "components/theme-provider";

type Props = {
  theme: ThemeType;
};

const GlobalStyle = createGlobalStyle<Props>`
  body, html{
    width: 100%;
    font-size: 62.5%;
    padding: 0px;
    overflow-y: scroll;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'eina-regular', 'Helvetica', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };
  div {
    box-sizing: border-box;
  };
  h1, h2, h3, h3 {
    font-family: 'druk-heavy';
    color: ${props =>
      props.theme.colors ? props.theme.colors.black : "#111111"};
  }

  /* Fonts Declarations... */
  @font-face {
    font-family: "druk-super";
    src: url("/static/fonts/durk/druk-wide-super.woff2");
    font-style: normal;
    font-weight: 900;
  };
  @font-face {
    font-family: "druk-super";
    src: url("/static/fonts/durk/druk-wide-super-italic.woff2");
    font-style: italic;
    font-weight: 900;
  };
  @font-face {
    font-family: "druk-heavy";
    src: url("/static/fonts/durk/druk-wide-heavy.woff2");
    font-style: normal;
    font-weight: 800;
  };
  @font-face {
    font-family: "druk-heavy";
    src: url("/static/fonts/durk/druk-wide-heavy-italic.woff2");
    font-style: italic;
    font-weight: 800;
  };
  @font-face {
    font-family: "druk-bold";
    src: url("/static/fonts/durk/druk-wide-bold.woff2");
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: "druk-bold";
    src: url("/static/fonts/durk/druk-wide-bold-italic.woff2");
    font-style: italic;
    font-weight: 700;
  }
  @font-face {
    font-family: "druk-medium";
    src: url("/static/fonts/durk/druk-wide-medium.woff2");
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    font-family: "druk-medium";
    src: url("/static/fonts/durk/druk-wide-medium-italic.woff2");
    font-style: italic;
    font-weight: 600;
  }
  @font-face {
    font-family: "eina-regular";
    src: url("/static/fonts/eina/eina-regular.woff2");
    font-style: normal;
    font-weight: 500;
  }
`;

export default GlobalStyle;
