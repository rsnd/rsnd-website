import anime from "animejs";

export const MoveCircle = (obj: {
  e: MouseEvent;
  circle: string;
  follower: string;
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
    duration: 500,
    left: obj.e.pageX + "px",
    top: obj.e.pageY + "px"
  });
};

export const HoveredFollower = (obj: {
  isHovered: boolean;
  circle: string;
  follower: string;
}) => {
  const { isHovered, follower } = obj;
  console.log("is hovered", isHovered);
  anime.remove(follower);
  const t = anime.timeline({
    targets: follower,
    easing: "easeOutCirc"
  });
  if (isHovered) {
    t.add({
      scale: 0.2,
      duration: 100,
      translateX: "-50px",
      translateY: "-50px"
    }).add({
      scale: 1.85,
      duration: 400,
      backgroundColor: "rgba(206,58,58, 0.18)",
      translateX: "-15px",
      translateY: "-15px",
      borderColor: "rgba(206,58,58, 0.2)"
    });
  } else if (isHovered === false) {
    t.add({
      scale: 0.2,
      duration: 100,
      translateX: "-50px",
      backgroundColor: "rgba(206,58,58,0)",
      translateY: "-50px"
    }).add({
      targets: follower,
      borderColor: "rgba(206,58,58, 1)",
      scale: 1,
      duration: 550,
      translateX: "-25px",
      translateY: "-25px"
    });
    // anime({
    //   targets: follower,
    //   borderColor: "rgba(206,58,58, 1)",
    //   backgroundColor: "rgba(206,58,58,0)",
    //   scale: [0.2, 1],
    //   duration: 150,
    //   translateX: "-25px",
    //   translateY: "-25px"
    // });
  }
};
