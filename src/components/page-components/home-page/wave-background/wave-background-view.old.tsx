import React, { useEffect } from "react";
import Styled from "styled-components";
import wavify from "./wavify";

const WavesWrapper = Styled.div`
    width: 100vw;
    height: 125vh;
    overflow: hidden;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;    
    transform: translateZ(0);
`;

const Svg = Styled.svg`
 transform: scale(1.15) rotate(-12deg) translateZ(0);
`;

const Group = Styled.g`
  transform: translateY(35%);

  > #wave-3{
    transform: rotate(150deg);
  }
`;

const Path = Styled.path`
  fill: none;
  stroke: url(#gradient);
  stroke-miterlimit: 10;
  stroke-width: .5px;
  opacity: 0.7;
  transform: translate3d(0px, 0px, 0px);
  backface-visibility: hidden;
  perspective: 1000px;
`;

const WaveBackground = () => {
  useEffect(() => {
    var wave1 = document.querySelector("#wave1");
    var wave2 = document.querySelector("#wave2");
    var wave3 = document.querySelector("#wave3");
    var wave4 = document.querySelector("#wave4");
    var wave5 = document.querySelector("#wave5");
    var wave6 = document.querySelector("#wave6");
    // var wave7 = document.querySelector("#wave7");
    var wave8 = document.querySelector("#wave8");
    var wave9 = document.querySelector("#wave9");
    var wave10 = document.querySelector("#wave10");

    console.log(wave1);
    wavify(wave1, {
      height: 30,
      bones: 15,
      amplitude: 180,
      color: "rgba(150, 97, 255, .8)",
      speed: 0.025
    });

    wavify(wave2, {
      height: 50,
      bones: 10,
      amplitude: 100,
      color: "rgba(150, 97, 255, .8)",
      speed: 0.0125
    });

    wavify(wave3, {
      height: 70,
      bones: 13,
      amplitude: 280,
      color: "rgba(150, 97, 255, .8)",
      speed: 0.018
    });

    wavify(wave4, {
      height: 90,
      bones: 12,
      amplitude: 390,
      color: "rgba(150, 97, 255, .8)",
      speed: 0.0215
    });

    wavify(wave5, {
      height: 100,
      bones: 14,
      amplitude: 80,
      color: "rgba(150, 97, 255, .8)",
      speed: 0.055
    });

    wavify(wave6, {
      height: 120,
      bones: 6,
      amplitude: 135,
      color: "rgba(150, 97, 255, .8)",
      speed: 0.065
    });

    // wavify(wave7, {
    //   height: 140,
    //   bones: 6,
    //   amplitude: 55,
    //   color: "rgba(150, 97, 255, .8)",
    //   speed: 0.0125
    // });

    // wavify(wave8, {
    //   height: 180,
    //   bones: 4,
    //   amplitude: 100,
    //   color: "rgba(150, 97, 255, .8)",
    //   speed: 0.085
    // });

    // wavify(wave9, {
    //   height: 200,
    //   bones: 5,
    //   amplitude: 140,
    //   color: "rgba(150, 97, 255, .8)",
    //   speed: 0.0355
    // });

    // wavify(wave10, {
    //   height: 155,
    //   bones: 5,
    //   amplitude: 190,
    //   color: "rgba(150, 97, 255, .8)",
    //   speed: 0.0165
    // });
  }, []);
  return (
    <WavesWrapper>
      <Svg width="100%" height="100%">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(206,58,58,.85)" />
            <stop offset="100%" stop-color="rgba(206,58,58,.15)" />
          </linearGradient>
        </defs>
        <Group>
          <Path id="wave1" d="" />
          <Path id="wave2" d="" />
          <Path id="wave3" d="" />
          <Path id="wave4" d="" />
          <Path id="wave5" d="" />
          <Path id="wave6" d="" />
          <Path id="wave7" d="" />
          <Path id="wave8" d="" />
          <Path id="wave9" d="" />
          <Path id="wave10" d="" />
        </Group>
      </Svg>
    </WavesWrapper>
  );
};

export default WaveBackground;
