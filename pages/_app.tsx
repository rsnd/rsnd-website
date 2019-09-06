import App from "next/app";
import React from "react";
import Styled from "styled-components";
import GlobalStyle from "components/global-styles";
import ThemeProvider from "components/theme-provider";

const PageWrapper = Styled.div<any>`
  background-color: ${props =>
    props.theme ? props.theme.colors.white : "#111111"};
  color: ${props => (props.theme ? props.theme.colors.black : "#111111")};
  min-height: 300vh;
  width: 100%;
  transition: transform .3s ease-out; 
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

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <React.Fragment>
          <GlobalStyle />
          <PageWrapper ref={this.pageWrapper}>
            <Component {...pageProps} />
          </PageWrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
