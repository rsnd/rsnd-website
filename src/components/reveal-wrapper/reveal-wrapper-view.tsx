import React, { useEffect } from "react";
import Styled from "styled-components";

interface IProps {
  isVisible: boolean;
  delay?: string | number;
  speed?: string;
  height?: string;
}
const Wrapper = Styled.span<any>`
    overflow: hidden;
    height: ${props => (props.height ? props.height : `auto`)};
    display: block;
`;

const Inner = Styled.span<IProps>`
    will-change: transform;
    display: block;
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transform: ${props =>
      props.isVisible
        ? `translateY(0%) rotate(0deg) scaleY(1)`
        : `translateY(155%) rotate(0.5deg) scaleY(1.2)`};
    transition: transform 1.8s cubic-bezier(0.86, 0, 0.07, 1);
    transition-delay: ${props =>
      props.delay && props.isVisible ? props.delay + `s` : `0s`};
`;

const Reveal: React.FC<any | IProps> = ({
  isVisible,
  children,
  delay,
  speed,
  height
}) => {
  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);
  const wrapperClassList = ["wrapper-outer"];
  if (speed) {
    wrapperClassList.push("vs-div");
  }

  let wrapperClasses = wrapperClassList.join(" ");
  return (
    <Wrapper
      className={wrapperClasses}
      data-speed={speed ? speed : "0"}
      height={height}>
      <Inner className="wrapper-inner" isVisible={isVisible} delay={delay}>
        {children}
      </Inner>
    </Wrapper>
  );
};

export default Reveal;
