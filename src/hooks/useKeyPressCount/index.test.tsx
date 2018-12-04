import React from "react";
import {
  render,
  fireEvent,
  flushEffects,
  cleanup
} from "react-testing-library";
import TestComponent from "./TestComponent";

const arrowDown = 40;
const arrowUp = 38;

afterEach(cleanup);

// describe("hook implementation", () => {
//   it("renders the initial state = 0 of the useKeyPressCount hook", () => {
//     const { getByTitle } = render(<TestComponent from={0} to={1} />);
//   });

//   it("renders 1 when the increment keydown event is fired", async () => {
//     const { debug, container, getByTitle } = render(
//       <TestComponent from={0} to={1} />
//     );
//     fireEvent.keyDown(container, { which: arrowDown });
//     flushEffects();
//   });
// });
