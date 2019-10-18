import Styled from "styled-components";

interface ISectionContainerProps {
  height?: string;
  bgColor?: string;
}

export const SectionContainerWrapper = Styled.div<ISectionContainerProps | any>`
    width: 100%;    
    min-height: ${props => (props.height ? props.height : "100vh")};
    background-color: ${props =>
      props.bgColor ? props.bgColor : "transparent"};    
`;
