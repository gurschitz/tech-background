import React from "react";
import { Slide, Heading, Text } from "spectacle";
import Typist from "react-typist";

function Intro({}) {
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
        <Typist cursor={{ show: false }}>
          <Heading size={2}>Thanks! Questions?</Heading>
        </Typist>
        <Text>
          Presentation built with{" "}
          <a href="https://github.com/microsoft/typescript">TypeScript</a>,{" "}
          <a href="https://github.com/facebook/react">React</a> and{" "}
          <a href="https://github.com/FormidableLabs/spectacle">Spectacle</a>.
        </Text>
        <Text>
          <a href="https://github.com/gurschitz/tech-background">Source Code</a>
        </Text>
      </div>
    </Slide>
  );
}

export default Intro;
