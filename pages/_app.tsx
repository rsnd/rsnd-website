import App from "next/app";
import React, { useContext } from "react";
import Styled from "styled-components";
import GlobalStyle from "components/global-styles";
import ThemeProvider from "components/theme-provider";
import ThemeContextProvider, { ThemeContext } from "context/theme-context";
import Navigation, { CachetteNavigation } from "components/navigation";
import Cursor from "components/cursor";
import CursorContextProvider, { CursorContext } from "context/cursor-context";

const PagesWrapper = Styled.div<any>`
  overflow-x: hidden;
  background-color: ${props =>
    props.background ? props.background : "#111111"};
  color: ${props => (props.foreground ? props.foreground : "#111111")};
  width: 100vw;
  position: fixed;
  background-attachment: fixed;
  overflow-x: auto;
  transition: transform .3s ease-out, color .35s ease-out, background-color .375s ease-out ;   
  /* top: 0;
  left: 0; */
  -webkit-overflow-scrolling: touch;
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
    const Scroll = new Parallax({
      preload: true,
      native: true,
      section: this.pageWrapper.current,
      divs: document.querySelectorAll(".vs-div")
    });
    Scroll.init();
  }

  render() {
    console.log("rendered");
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider>
        <ThemeContextProvider>
          <CursorContextProvider>
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
                    <CursorContext.Consumer>
                      {({ isHovered }) => <Cursor isHovered={isHovered} />}
                    </CursorContext.Consumer>
                    <PagesWrapper
                      foreground={value.theme.foreground}
                      background={value.theme.background}
                      ref={this.pageWrapper}
                      id="page-wrapper"
                      className="vs-section">
                      <Component {...pageProps} />
                    </PagesWrapper>
                  </React.Fragment>
                )}
              </ThemeContext.Consumer>
            </React.Fragment>
          </CursorContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    );
  }
}
