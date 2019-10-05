import React, { createRef, useEffect } from "react";
import Styled from "styled-components";
import anime from "animejs";

const CursorContainer = Styled.div`
    width: 5rem;
    height: 5rem;
    border: 1px solid;
    position: absolute;
    top: -0px;
    left: -0px;
    z-index: 9999;
    pointer-events: none;
`;

const CursorFollow = Styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;  
    position: absolute;
    top: -0px;
    left: -0px;
    transform: translate3d(-25px, -25px, 0);
    border: 1px solid ${props => props.theme.colors.red};
`;

const CursorCircle = Styled.div`
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    position: absolute;
    top: -0px;
    left: -0px;
    background-color: ${props => props.theme.colors.red};
`;

const MoveCircle = (obj: {
  e: MouseEvent;
  circle: HTMLDivElement;
  follower: HTMLDivElement;
}) => {
  anime({
    targets: obj.circle,
    easing: "easeOutCirc",
    duration: 100,
    translateX: obj.e.pageX,
    translateY: obj.e.pageY
  });
  anime({
    targets: obj.follower,
    easing: "easeOutCirc",
    duration: 800,
    left: obj.e.pageX + "px",
    top: obj.e.pageY + "px"
  });
};

const Cursor = () => {
  const circle = createRef<HTMLDivElement>();
  const follower = createRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      MoveCircle({ e, circle: circle.current, follower: follower.current });
    });
  }, []);

  return (
    <CursorContainer>
      <CursorFollow ref={follower} />
      <CursorCircle ref={circle} />
    </CursorContainer>
  );
};

export default Cursor;
