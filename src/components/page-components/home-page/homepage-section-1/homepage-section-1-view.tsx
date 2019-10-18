import React, { useContext, useEffect } from "react";
import Styled, { keyframes } from "styled-components";
import SectionContainer from "components/page-components/section-container";
import { Flex, Box } from "rebass";
import Nav from "components/navigation";
import { useInView } from "react-intersection-observer";
import Reveal from "components/reveal-wrapper";
import { CursorContext } from "context/cursor-context";
import RenderSubscribeLinks from "./subscribe-links-view";
import WaveBackground from "../wave-background/wave-background-view.old";
// Texts
import { Heading, Emphasize, Paragraph } from "components/texts";

const HeroContentContainer = Styled(Flex)`
  margin-top: 3.6rem;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

const HeroContentWrapper = Styled(Box)`
  width: 100%;
  height: 100%;
 `;

const ParagraphWrapper = Styled(Paragraph)`
  margin-top: 5rem;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.grey};
  
 `;

const SubscribeInfoContainer = Styled.div`
  margin-top: 7rem;
  padding-bottom: 1rem;
`;
const SubscribeInfoHeading = Styled(Heading)`
  font-size: 1.8rem;
  font-style: italic;
  color: ${props => props.theme.colors.red};
`;

const ScrollIndicatorContainer = Styled.div`
  width: 3rem;
  height: 15rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: row;
`;
const ScrollText = Styled.span`
  writing-mode: vertical-lr;
  font-size: 1.3rem;
  letter-spacing: .075rem;
  font-family: ${props => props.theme.fonts.druk.heavy};
  font-style: italic;
  transform: rotate(-180deg);
`;
const LineContainer = Styled.div`
  width: .35rem;
  align-self: flex-end;
  height: 35%;
  overflow: hidden;
  margin-left: .1rem;
`;

const animateLine = keyframes`
  0%{
   transform: translateY(0%); 
  };
  50%{
    transform: translateY(105%);
  };
  100%{
    transform: translateY(0%);
  };
`;

const ScrollLine = Styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.red};
  animation: ${animateLine} 2.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

const subscribeOptions = [
  {
    label: "iTunes",
    icon: "../../../static/logos/apple-logo.svg",
    href: "#"
  },
  {
    label: "Spotify",
    icon: "../../../static/logos/spotify.svg",
    href: "#"
  },
  {
    label: "Google Podcasts",
    icon: "../../../static/logos/google-podcasts-logo.svg",
    href: "#"
  },
  {
    label: "Stitcher",
    icon: "../../../static/logos/stitcher-icon.svg",
    href: "#"
  }
];

const Section1 = () => {
  const [headerRef, headerInView, headerEntry] = useInView({
    threshold: 0
  });

  const [paragraphRef, paragraphInView, paragraphEntry] = useInView({
    threshold: 0
  });

  const [subscribeLinksRef, subscribeInView, subscribeEntry] = useInView({
    threshold: 0
  });

  const [heroRef, heroInView, heroEntry] = useInView({
    threshold: 0
  });

  useEffect(() => {
    console.log(subscribeInView);
  }, [subscribeInView]);

  return (
    <SectionContainer height="300vh" data-scroll-section>
      <Nav />
      <HeroContentContainer ref={heroRef} width={[1]} mx="auto" pt={["20rem"]}>
        {heroInView ? <WaveBackground /> : null}
        <HeroContentWrapper width={[0.9]}>
          <Heading fontSize="3.6rem" ref={headerRef}>
            <Reveal
              isVisible={headerInView}
              speed="0.0125"
              height="3.6rem"
              className="vs-div">
              Conversations between random dudes
            </Reveal>
            <Reveal
              isVisible={headerInView}
              speed="0.025"
              delay=".3"
              className="vs-div">
              Who happen to be <Emphasize>developers</Emphasize>.
            </Reveal>
          </Heading>
          <ParagraphWrapper ref={paragraphRef}>
            <Reveal
              isVisible={paragraphInView}
              height="2.2rem"
              delay=".5">{`Chats, bants, rants & everything in-between!`}</Reveal>
          </ParagraphWrapper>
          <SubscribeInfoContainer ref={subscribeLinksRef}>
            <SubscribeInfoHeading>Subscribe</SubscribeInfoHeading>
            <RenderSubscribeLinks
              links={subscribeOptions}
              inView={subscribeInView}
            />
          </SubscribeInfoContainer>
        </HeroContentWrapper>
        <ScrollIndicatorContainer>
          <ScrollText>Scroll</ScrollText>
          <LineContainer>
            <ScrollLine />
          </LineContainer>
        </ScrollIndicatorContainer>
      </HeroContentContainer>
    </SectionContainer>
  );
};

export default Section1;
