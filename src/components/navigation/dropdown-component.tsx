import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const DropdownContentWrapper = Styled.div`
    width: 20rem;
`;

const DropdownTrigger = Styled.a`
    display: block;
`;

const DropdownWrapper = props => {
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleDropdown = e => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    document.addEventListener("click", e => {
      e.preventDefault;
      if (showDropdown) {
        setShowDropdown(false);
      }
    });
  }, []);

  return (
    <DropdownContentWrapper>
      <DropdownTrigger onClick={toggleDropdown}>
        {props.dropdownLabel}
      </DropdownTrigger>
      {showDropdown ? <DropdownContent /> : null}
    </DropdownContentWrapper>
  );
};

export const DropdownContent = props => {
  return <DropdownContentWrapper>{props.children}</DropdownContentWrapper>;
};

export default DropdownWrapper;
