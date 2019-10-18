import anime from "animejs";

export const MoveCircle = (obj: {
  e: MouseEvent;
  circle: string | string[];
  follower: string;
}) => {
  anime({
    targets: obj.circle,
    easing: "easeOutCirc",
    duration: 10,
    translateX: obj.e.clientX,
    translateY: obj.e.clientY
  });
  anime({
    targets: obj.follower,
    easing: "easeOutCirc",
    duration: 500,
    left: obj.e.clientX + "px",
    top: obj.e.clientY + "px"
  });
};

export const HoveredFollower = (obj: {
  isHovered: boolean;
  circle: string;
  follower: string;
}) => {
  const { isHovered, follower } = obj;
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
      backgroundColor: "rgba(206,58,58, 0.08)",
      translateX: "-15px",
      translateY: "-15px",
      border: ".35px solid rgba(206,58,58, 0.05)"
    });
  } else if (isHovered === false) {
    t.add({
      scale: 0.2,
      duration: 150,
      translateX: "-50px",
      backgroundColor: "rgba(206,58,58,0)",
      translateY: "-50px"
    }).add({
      targets: follower,
      border: ".5px solid rgba(206,58,58, 0.9)",
      scale: 1,
      duration: 550,
      translateX: "-25px",
      translateY: "-25px"
    });
  }
};
