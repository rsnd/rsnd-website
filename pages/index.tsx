import React, { useEffect } from "react";
import Head from "next/head";
import Styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const PageSection = Styled.div`
  background-color: #111111;
  height: 200vh;
  color: #FFF;
`;
const Home = () => {
  useEffect(() => {});
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="hero">
        <Parallax pages={2}>
          <PageSection>
            <h1 className="title">Home</h1>
            <ParallaxLayer offset={0} speed={0.6}>
              <p>Stuff, Stuff, Stuff</p>
            </ParallaxLayer>
            <ParallaxLayer offset={0.25} speed={0.4}>
              <p>Stuff, Stuff, Stuff</p>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.7}>
              <p>Stuff, Stuff, Stuff</p>
            </ParallaxLayer>
          </PageSection>
        </Parallax>
      </div>
    </React.Fragment>
  );
};

export default Home;
