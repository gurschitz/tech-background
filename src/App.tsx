import React from "react";
import { Deck } from "spectacle";
import Intro from "./slides/Intro";
import Education from "./slides/Education";
import Smartmenu from "./slides/Smartmenu";
import Goodbag from "./slides/Goodbag";
import GoodbagLandingPage from "./slides/GoodbagLandingPage";
import Ntry from "./slides/Ntry";
import Pioneers from "./slides/Pioneers";
import Chatbird1 from "./slides/Chatbird1";
import Chatbird2 from "./slides/Chatbird2";
import Github from "./slides/Github";
import UseReact from "./slides/UseReact";
import Outro from "./slides/Outro";
import LastSlide from "./slides/LastSlide";
import createTheme from "spectacle-theme-nova";

const theme = createTheme();

function App() {
  return (
    <Deck theme={theme}>
      <Intro />
      <Education />
      <Smartmenu />
      <Goodbag />
      <GoodbagLandingPage />
      <Ntry />
      <Pioneers />
      <Chatbird1 />
      <Chatbird2 />
      <Github />
      <UseReact />
      <Outro />
      <LastSlide />
    </Deck>
  );
}

export default App;
