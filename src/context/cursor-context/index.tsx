import React, { createContext, useState } from "react";

export interface IContext {
  isHovered: boolean;
  toggleHover?(state: boolean): void;
}

export const CursorContext = createContext<IContext>({ isHovered: false });

const CursorContextProvider: React.FC = props => {
  const [hoverState, setHoverState] = useState(false);
  const toggleHover = state => {
    setHoverState(state);
  };
  return (
    <CursorContext.Provider value={{ isHovered: hoverState, toggleHover }}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
