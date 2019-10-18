import React, { useEffect } from "react";
import Styled from "styled-components";
import anime from "animejs";

const WavesWrapper = Styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;    
`;

const Svg = Styled.svg`
  /* transform: rotate(-12deg) scale(1.5); */
`;

const Group = Styled.g`
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
`;

const alternatePaths = ({ pathA, pathB, path }) => {
  console.log("Alternating paths: ", path);
  anime.remove(path);
  anime({
    targets: path,
    d: [{ value: pathA }, { value: pathB }],
    duration: 10000,
    direction: "alternate",
    loop: true,
    easing: "easeInOutElastic(0.8, 0.35)",
    complete: () => {
      console.log("alternated path", path);
    }
  });
};

const paths = {
  path1: {
    id: "#path-1",
    a:
      "M9243-3032.994s93.469-184.345,598.441-239.867,406.693-409.491,736.654-285.593,332.113,9.34,631.065-70.768",
    b:
      "M9276.829-2928.2s80.436-394.878,461.651-450.046,562.4-355.837,822.275-143.359,439.07-104.926,642.634-129.007"
  },
  path2: {
    id: "#path-2",
    a:
      "M9243-3032.994s148.768-210.767,580.459-268.72,410.642-348.644,708.09-247.5,328.526-50.6,627.479-130.709",
    b:
      "M9243-3032.994s138.386-282.074,580.459-268.72,424.266-207.724,812.541-182.834,224.075-115.268,523.027-195.376"
  },
  path3: {
    id: "#path-3",
    a:
      "M9243-3032.994s83.978-179.225,587.563-203.222,421.345-337.119,718.793-235.976,300.635-183.564,599.587-263.672",
    b:
      "M9243-3032.994s242.93-264.188,587.563-203.222,303.333-371.506,704.479-278.536,314.948-141,613.9-221.112"
  },
  path4: {
    id: "#path-4",
    a:
      "M9243-3032.994s278.333-479.23,546-412.345,360.213-181.273,775.922-11.246,285.068-199.172,584.021-279.28",
    b:
      "M9243-3032.994s304.914-432.662,572.581-365.777,198.655-347.1,731.747-102.84,302.662-154.145,601.614-234.253"
  },
  path5: {
    id: "#path-5",
    a:
      "M9243-3032.994s96.939-547.851,402.086-468.378,492.345-260.318,919.836,44.787,206.621-466.3,505.573-546.411",
    b:
      "M9243-3032.994s-75.4-515.613,401.664-422.11,249.21-358.336,816.769-12.062,310.11-455.721,609.063-535.83"
  },
  path6: {
    id: "#path-6",
    a:
      "M8974.178-3278.863S9247.366-3596,9645.086-3501.372s669.5-296.755,919.836,44.787,206.621-466.3,505.573-546.411",
    b:
      "M9214.961-3175.8s-28.09-369.664,438.862-205.321,201.038-396.088,911.1-75.459,248.216-481.96,547.168-562.068"
  }
};

const WaveBackground = () => {
  // useEffect(() => {
  //   Object.keys(paths).map(path => {
  //     alternatePaths({
  //       pathA: paths[path].a,
  //       pathB: paths[path].b,
  //       path: paths[path].id
  //     });
  //   });
  // }, []);
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
          <Path
            id="path-1"
            d="M9243-3032.994s93.469-184.345,598.441-239.867,406.693-409.491,736.654-285.593,332.113,9.34,631.065-70.768"
            transform="translate(-9608.867 2529.628) rotate(8)"
          />
          <Path
            id="path-2"
            d="M9243-3032.994s148.768-210.767,580.459-268.72,410.642-348.644,708.09-247.5,328.526-50.6,627.479-130.709"
            transform="translate(-9243 3910)"
          />
          <Path
            id="path-3"
            d="M9243-3032.994s83.978-179.225,587.563-203.222,421.345-337.119,718.793-235.976,300.635-183.564,599.587-263.672"
            transform="translate(-9607.766 2553.628) rotate(8)"
          />
          <Path
            id="path-4"
            d="M9243-3032.994s278.333-479.23,546-412.345,360.213-181.273,775.922-11.246,285.068-199.172,584.021-279.28"
            transform="translate(-9586.766 2635.628) rotate(8)"
          />
          <Path
            id="path-5"
            d="M9243-3032.994s96.939-547.851,402.086-468.378,492.345-260.318,919.836,44.787,206.621-466.3,505.573-546.411"
            transform="translate(-9575.159 2770.628) rotate(8)"
          />
          <Path
            id="path-6"
            d="M8974.178-3278.863S9247.366-3596,9645.086-3501.372s669.5-296.755,919.836,44.787,206.621-466.3,505.573-546.411"
            transform="translate(-9599.867 2849.628) rotate(8)"
          />
        </Group>
      </Svg>
    </WavesWrapper>
  );
};

export default WaveBackground;
