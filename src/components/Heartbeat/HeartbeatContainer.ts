import posed from "react-pose";

const HearbeatContainer = posed.div({
  default: { scale: 1 },
  pulse: { scale: 1.2 }
});

export default HearbeatContainer;
