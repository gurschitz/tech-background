import React, { useState } from "react";
import { Slide, Heading } from "spectacle";
import Typist from "react-typist";
import FadeIn from "react-fade-in";

function Intro({}) {
  const [isTypingDone, setTypingDone] = useState(false);
  const onTypingDone = () => setTypingDone(true);
  return (
    <Slide>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Typist onTypingDone={onTypingDone} cursor={{ show: false }}>
          <Heading size={2}>Hello, my name is Gerald Urschitz</Heading>
        </Typist>
        {isTypingDone && (
          <FadeIn>
            <Heading size={3}>I am a web developer</Heading>
          </FadeIn>
        )}
      </div>
    </Slide>
  );
}

export default Intro;
