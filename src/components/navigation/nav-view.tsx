import React, { useContext } from "react";
import { Flex, Box } from "rebass";
import Styled from "styled-components";
import { ThemeContext } from "context/theme-context";
import NavLinks from "./navLinks";

interface INavWrapperProps {
  height?: string;
  color?: string;
}
const NavWrapper = Styled.div<INavWrapperProps>`
    width: 100%;
    height: ${props => (props.height ? props.height : "8rem")};
    color: ${props => (props.color ? props.color : props.theme.colors.black)};
`;

const Navigation: React.FC = () => {
  const themeCxt = useContext(ThemeContext);

  return (
    <NavWrapper color={themeCxt.theme.foreground}>
      <NavLinks />>
    </NavWrapper>
  );
};

export default Navigation;
