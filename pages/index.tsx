import React from "react";
import Head from "next/head";
import Styled from "styled-components";

const PageSection = Styled.div`
  background: transparent;
  height: 200vh;
  padding-top: 100vh;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="hero">
        <div className="page-container">
          <PageSection data-scroll-section>
            <h1
              data-scroll
              data-scroll-speed="5"
              data-scroll-position="top"
              className="title">
              Home
            </h1>
            <p
              data-scroll
              data-scroll-speed="2"
              data-scroll-position="top"
              className="title">
              Stuff, Stuff, Stuff
            </p>
            <p
              data-scroll
              data-scroll-speed="2"
              data-scroll-position="top"
              data-scroll-direction="horizontal"
              className="title">
              Stuff, Stuff, Stuff
            </p>
            <p>Stuff, Stuff, Stuff</p>
          </PageSection>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
