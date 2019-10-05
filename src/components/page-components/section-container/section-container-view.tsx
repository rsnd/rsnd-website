import React from "react";
import { SectionContainerWrapper } from "./section-container-styles";

interface IProps {
  height?: string;
}
const SectionContainer: React.FC<IProps> = props => (
  <SectionContainerWrapper height={props.height}>
    {props.children}
  </SectionContainerWrapper>
);

export default SectionContainer;
