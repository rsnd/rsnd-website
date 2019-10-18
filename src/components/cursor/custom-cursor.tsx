import React, { createRef, useEffect } from "react";
import Styled from "styled-components";
import {
  CursorContainer,
  CursorFollow,
  CursorCircle,
  CursorActionText
} from "./custom-cursor-styles";
import { MoveCircle, HoveredFollower } from "./cursor-animations";

interface IProps {
  isHovered: boolean;
  actionText?: string;
}
const Cursor: React.FC<IProps> = ({ isHovered, actionText }) => {
  const circle = createRef<HTMLDivElement>();
  const follower = createRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      MoveCircle({
        e,
        circle: ["#cursor-circle", "#cursor-action-text"],
        follower: "#cursor-follower"
      });
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
      <CursorCircle ref={circle} id="cursor-circle" isHovered={isHovered} />
      <CursorActionText isHovered={isHovered} id="cursor-action-text">
        <span style={{ display: "block", transform: `translateX(-10px)` }}>
          {actionText || "Go!"}
        </span>
      </CursorActionText>
    </CursorContainer>
  );
};

export default Cursor;
