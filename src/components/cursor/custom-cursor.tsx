import React, { createRef, useEffect } from "react";
import {
  CursorContainer,
  CursorFollow,
  CursorCircle
} from "./custom-cursor-styles";
import { MoveCircle, HoveredFollower } from "./cursor-animations";

interface IProps {
  isHovered: boolean;
}
const Cursor: React.FC<IProps> = ({ isHovered }) => {
  const circle = createRef<HTMLDivElement>();
  const follower = createRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      MoveCircle({ e, circle: "#cursor-circle", follower: "#cursor-follower" });
    });
    return () => {
      window.removeEventListener("mousemove", e => {
        MoveCircle({
          e,
          circle: "#cursor-circle",
          follower: "#cursor-follower"
        });
      });
    };
  }, []);

  useEffect(() => {
    HoveredFollower({
      isHovered,
      circle: "#cursor-circle",
      follower: "#cursor-follower"
    });
  }, [isHovered]);

  return (
    <CursorContainer>
      <CursorFollow isHovered={isHovered} ref={follower} id="cursor-follower" />
      <CursorCircle ref={circle} id="cursor-circle" />
    </CursorContainer>
  );
};

export default Cursor;
