import React from "react";
import { Deck } from "spectacle";
import Intro from "./slides/Intro";
import Education from "./slides/Education";
import Frontend from "./slides/Frontend";
import Frontend2 from "./slides/Frontend2";
import Github from "./slides/Github";
import Backend from "./slides/Backend";
import Outro from "./slides/Outro";
import createTheme from "spectacle-theme-nova";
import Heart from "./slides/Heart";

const theme = createTheme();

function App() {
  return (
    <Deck theme={theme}>
      <Intro />
      <Education />
      <Backend />
      <Frontend />
      <Frontend2 />
      <Github />
      <Heart />
      <Outro />
    </Deck>
  );
}

export default App;
