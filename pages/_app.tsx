import App from "next/app";
import React from "react";
import Styled from "styled-components";
import GlobalStyle from "components/global-styles";
import ThemeProvider from "components/theme-provider";
import ThemeContextProvider, { ThemeContext } from "context/theme-context";

const PagesWrapper = Styled.div<any>`
  background-color: ${props =>
    props.background ? props.background : "#111111"};
  color: ${props => (props.foreground ? props.foreground : "#111111")};
  width: 100%;
  transition: transform .3s ease-out, color .35s ease-out, background-color .375s ease-out ;   
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

interface Props {
  pageProps: {};
  Component: React.ReactElement;
}

export default class MyApp extends App<Props, {}> {
  pageWrapper: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.pageWrapper = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    const LocomotiveScroll = require("locomotive-scroll").default;
    const Scroll = new LocomotiveScroll({
      el: this.pageWrapper.current,
      smooth: true,
      smoothMobile: true
    });
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
                <PagesWrapper
                  foreground={value.theme.foreground}
                  background={value.theme.background}
                  ref={this.pageWrapper}>
                  <Component {...pageProps} />
                </PagesWrapper>
              )}
            </ThemeContext.Consumer>
          </React.Fragment>
        </ThemeContextProvider>
      </ThemeProvider>
    );
  }
}
