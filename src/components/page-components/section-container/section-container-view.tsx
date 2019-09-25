import React from "react";
import { SectionContainerWrapper } from "./section-container-styles";

const SectionContainer: React.FC = props => (
  <SectionContainerWrapper>{props.children}</SectionContainerWrapper>
);

export default SectionContainer;
