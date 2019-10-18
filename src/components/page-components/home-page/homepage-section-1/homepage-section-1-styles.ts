import Styled from "styled-components";

interface ISubscribeLinksProps {
  delay?: string;
  inView?: boolean;
}
export const SubscribeLinksWrapper = Styled.div<ISubscribeLinksProps>`
  margin-top: 2.5rem;
  display: flex;
`;

export const SubscribeLinkContainer = Styled.div<ISubscribeLinksProps>`
  width: 5rem;
  height: 5rem;
  margin-right: 1.5rem;
  opacity: ${props => (props.inView ? 1 : 0)};
  transform: ${props =>
    props.inView
      ? `translateY(0%) rotate(0deg) scaleY(1)`
      : `translateY(105%) rotate(0.5deg) scaleY(1.2)`};
    transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1), opacity 1.05s cubic-bezier(0.86, 0, 0.07, 1);
    transition-delay: ${props =>
      props.delay && props.inView ? props.delay : `0s`};
`;

export const SubscribeLink = Styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: .25px solid rgba(10, 10, 10, 0.25);
  background-color: #FFFFFF;
  box-shadow: 1px 15px 20px rgba(10, 10, 10, .075);
  padding: 1rem;
  box-sizing: border-box;
  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;
