import React from "react";

import useKeyPressCount from ".";

interface ITestComponentProps {
  from: number;
  to: number;
}

const arrowDown = 40;
const arrowUp = 38;

function TestComponent({ from, to }: ITestComponentProps) {
  const value = useKeyPressCount({
    from,
    to,
    decrementKey: arrowUp,
    incrementKey: arrowDown
  });

  return <div title="value">{`value: ${value}`}</div>;
}

export default TestComponent;
