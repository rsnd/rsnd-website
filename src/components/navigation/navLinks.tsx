import React, { useContext } from "react";
import Link from "./Link";
import Routes, { ILink } from "./routes";
import Styled from "styled-components";
import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from "react-simple-dropdown";
import "react-simple-dropdown/styles/Dropdown.css";
import { CursorContext } from "context/cursor-context";

import DropdownIndicator from "../../../static/logos/dropdown-indicator.svg";

interface INavLinks {
  darkTheme: boolean;
  dropdown?: boolean;
}

const links = Routes.map((link: ILink) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const LinksContainer = Styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

const LinkItem = Styled.li<INavLinks>`
  overflow: hidden;
  padding:  .4rem .8rem;
  position: ${props => (props.dropdown ? null : `relative`)};
  color: ${props =>
    props.darkTheme ? props.theme.colors.white : props.theme.colors.black};
  &:hover{
    a{
      transform: translateY(-20px);
      opacity: 1;
      &:before{
        transform: scale(0);
        opacity: 0;
      }
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    opacity: .5;
    font-family: ${props => props.theme.fonts.druk.medium};
    font-size: .95rem;
    letter-spacing: .06rem;
    color: inherit;
    display: block;
    height: 1rem;
    transition: transform .25s cubic-bezier(0.24, 0.08, 0.25, 1);
    &:after {
      content: attr(data-content);
      display: block;
      margin-top: 10px;
    }
    &.active {
      color: ${props => props.theme.colors.red};
      opacity: 1;
    }
  }
`;
const StyledDropdown = Styled(Dropdown)`
  display: flex;
  cursor: pointer;
  > img {
    margin-left: .5rem;
    margin-top: .1rem;
    opacity: .5;
    transition: transform .25s cubic-bezier(0.24, 0.08, 0.25, 1);
    }
  &:hover, &.dropdown--active{
    > img, a {
      opacity: 1;
      transform: none;
    }
    &.dropdown--active {
      > img {
        transform: rotate(180deg);
      }
    }  
  } 
`;

const StyledDropdownContent = Styled(DropdownContent)`
  width: 25rem;
  min-height: 5rem;
  transform: translateX(-4rem) translateY(2rem);
  z-index: 5;
`;

const DropdownItemsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #FFFFFF;
  box-shadow: 1px 3.5px 9px rgba(0,0,0,0.075);
  position: relative;
  border: 1px solid rgba(0,0,0,0.095);
  overflow-x: hidden;
`;

const DropdownLinkItem = Styled.a`
  display: flex !important;
  width: 100%;
  padding: 2.5rem 1rem;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,0.095);
  transition: background-color .15s ease-in  !important;
  &:nth-child(1){
    border: none;
  }
  > span {
    margin-left: 1rem;
    display: block;
  }
  > img {
    display: block;
    margin-left: 1rem;
  }
  &:hover {
    background-color: rgba(50, 50, 50, .035);
  }
`;

const NavLinks: React.FC<INavLinks> = props => {
  const { toggleHover } = useContext(CursorContext);
  return (
    <nav>
      <LinksContainer>
        {links.map(({ key, href, label, dropdown, options }) => (
          <LinkItem
            onMouseEnter={e => {
              toggleHover(true);
            }}
            onMouseLeave={e => {
              toggleHover(false);
            }}
            dropdown={dropdown}
            darkTheme={props.darkTheme}
            key={key}>
            {!dropdown ? (
              <Link activeClassName="active" href={href}>
                <a data-content={label}>{label}</a>
              </Link>
            ) : (
              <StyledDropdown>
                <DropdownTrigger data-content={label}>
                  <span>{label}</span>
                </DropdownTrigger>
                <StyledDropdownContent>
                  <DropdownItemsContainer>
                    {options.map(({ label, icon, href }) => (
                      <DropdownLinkItem href={href}>
                        <img src={icon} alt={`${label} logo`} />
                        <span>{label}</span>
                      </DropdownLinkItem>
                    ))}
                  </DropdownItemsContainer>
                </StyledDropdownContent>
                <img src={DropdownIndicator} />
              </StyledDropdown>
            )}
          </LinkItem>
        ))}
      </LinksContainer>
    </nav>
  );
};

export default NavLinks;
