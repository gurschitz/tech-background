import React from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle-theme-nova";
import Intro from "./slides/Intro";
import Education from "./slides/Education";
import Backend from "./slides/Backend";
import Frontend from "./slides/Frontend";
import FrontendChatbird from "./slides/FrontendChatbird";
import Github from "./slides/Github";
import UseReact from "./slides/UseReact";
import Outro from "./slides/Outro";

const theme = createTheme();

function App() {
  return (
    <Deck theme={theme}>
      <Intro />
      <Education />
      <Backend />
      <Frontend />
      <FrontendChatbird />
      <Github />
      <UseReact />
      <Outro />
    </Deck>
  );
}

export default App;
