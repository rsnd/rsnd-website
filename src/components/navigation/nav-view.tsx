import React, { useContext } from "react";
import { Flex, Box } from "rebass";
import Styled from "styled-components";
import { ThemeContext } from "context/theme-context";
import Link from "next/link";
import NavLinks from "./navLinks";
import rsndLogo from "../../../static/logos/rsnd-logo.svg";
import rsndLogoLight from "../../../static/logos/rsnd-logo-white.svg";

interface INavWrapperProps {
  height?: string;
  color?: string;
  bgColor?: string;
  darkTheme?: boolean;
}

const NavWrapper = Styled.div<INavWrapperProps>`
    width: 100%;
    height: ${props => (props.height ? props.height : "6rem")};
    color: ${props => (props.color ? props.color : props.theme.colors.black)};
    background-color: ${props =>
      props.bgColor ? props.bgColor : "rgba(0,0,0,0)"};
    
`;

const NavContentWrapper = Styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10rem;
    height: 100%;
`;
const NavLogoContainer = Styled(Box)`
    height: auto;
    width: 7rem;
    img {
        max-width: 100%;
    }
`;
const NavLinksContainer = Styled(Box)`
    width: 40%;
`;

const Navigation: React.FC<INavWrapperProps> = props => {
  return (
    <NavWrapper
      height={props.height}
      color={props.color}
      bgColor={props.bgColor}>
      <NavContentWrapper>
        <NavLogoContainer>
          <Link href="/">
            <a>
              <img
                src={props.darkTheme ? rsndLogoLight : rsndLogo}
                alt="official rsnd logo"
              />
            </a>
          </Link>
        </NavLogoContainer>
        <NavLinksContainer>
          <NavLinks darkTheme={props.darkTheme} />
        </NavLinksContainer>
      </NavContentWrapper>
    </NavWrapper>
  );
};

export default Navigation;
