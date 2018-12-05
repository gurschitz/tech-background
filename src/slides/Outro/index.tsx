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
          Presentation built with <strong>TypeScript</strong>,{" "}
          <strong>React</strong> and <strong>Spectacle</strong>.{" "}
          <a href="https://github.com/gurschitz/tech-background">Source Code</a>
          .
        </Text>
        <Text>
          View at{" "}
          <a href="https://tech.usereact.io">{`https://tech.usereact.io`}</a>
        </Text>
      </div>
    </Slide>
  );
}

export default Intro;
