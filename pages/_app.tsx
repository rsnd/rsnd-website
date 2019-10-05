import App from "next/app";
import React from "react";
import Styled from "styled-components";
import GlobalStyle from "components/global-styles";
import ThemeProvider from "components/theme-provider";
import ThemeContextProvider, { ThemeContext } from "context/theme-context";
import Navigation, { CachetteNavigation } from "components/navigation";
import Cursor from "components/cursor";

const PagesWrapper = Styled.div<any>`
  background-color: ${props =>
    props.background ? props.background : "#111111"};
  color: ${props => (props.foreground ? props.foreground : "#111111")};
  width: 100%;
  position: fixed;
  overflow: auto;
  transition: transform .3s ease-out, color .35s ease-out, background-color .375s ease-out ;   
  top: 0;
  left: 0;
  border: 1px solid;
`;

interface Props {
  pageProps: {};
  Component: React.ReactElement;
}

export default class MyApp extends App<Props, {}> {
  constructor(props) {
    super(props);
    this.pageWrapper = React.createRef<HTMLDivElement>();
  }
  pageWrapper: React.RefObject<HTMLDivElement>;

  setBodyHeight = height => {
    document.body.style.height = height;
  };

  componentDidMount() {
    const Parallax = require("helpers/parallax-scroll").default;
    console.log(Parallax);
    const Scroll = new Parallax({
      preload: true,
      native: true,
      section: this.pageWrapper.current,
      divs: document.querySelectorAll(".vs-div")
    });

    Scroll.init();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider>
        <ThemeContextProvider>
          <React.Fragment>
            <GlobalStyle />
            <ThemeContext.Consumer>
              {value => (
                <React.Fragment>
                  <CachetteNavigation
                    initVisible={false}
                    navHeight={"8rem"}
                    navComponent={<Navigation />}
                  />
                  <Cursor />
                  <PagesWrapper
                    foreground={value.theme.foreground}
                    background={value.theme.background}
                    ref={this.pageWrapper}>
                    <Component {...pageProps} />
                  </PagesWrapper>
                </React.Fragment>
              )}
            </ThemeContext.Consumer>
          </React.Fragment>
        </ThemeContextProvider>
      </ThemeProvider>
    );
  }
}
