import React from "react";
import Styled from "styled-components";
import SectionContainer from "components/page-components/section-container";
import Nav from "components/navigation";

const Section1 = () => {
  return (
    <SectionContainer height="300vh" data-scroll-section>
      <Nav />
      <div style={{ marginTop: "40rem" }}>
        <h3 data-speed="0.5" className="vs-div">
          Hello
        </h3>
        <h3 data-speed="0.2" className="vs-div">
          Hello
        </h3>
      </div>
    </SectionContainer>
  );
};

export default Section1;
