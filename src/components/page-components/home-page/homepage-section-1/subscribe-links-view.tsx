import React, { useContext } from "react";
import { CursorContext } from "context/cursor-context";
import {
  SubscribeLinksWrapper,
  SubscribeLinkContainer,
  SubscribeLink
} from "./homepage-section-1-styles";

const RenderSubscribeLinks: React.FC<any> = ({ links, inView }) => {
  const { toggleHover } = useContext(CursorContext);
  return (
    <SubscribeLinksWrapper>
      {links.map((link, index) => {
        return (
          <SubscribeLinkContainer
            delay={`.${index}s`}
            inView={inView}
            key={`link-${index}`}
            onMouseEnter={e => {
              toggleHover(true);
            }}
            onMouseLeave={e => {
              toggleHover(false);
            }}>
            <SubscribeLink href={link.href}>
              <img src={link.icon} />
            </SubscribeLink>
          </SubscribeLinkContainer>
        );
      })}
    </SubscribeLinksWrapper>
  );
};

export default RenderSubscribeLinks;
