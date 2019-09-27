import React from "react";
import Head from "next/head";
import Styled from "styled-components";

// Page-Sections
import Section1 from "components/page-components/home-page/homepage-section-1";

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
      <div className="page-container">
        <Section1 />
      </div>
    </React.Fragment>
  );
};

export default Home;
