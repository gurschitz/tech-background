import React from "react";
import { Slide, Text, Heading } from "spectacle";

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
        <Heading size={2}>Thank you!</Heading>
        <Text>
          This presentation was built using{" "}
          <a href="https://github.com/facebook/react">React</a> and{" "}
          <a href="https://github.com/FormidableLabs/spectacle">Spectacle</a>.
          You can find the source code here:{" "}
          <a href="https://github.com/gurschitz/tech-background">
            tech-background source code
          </a>
          . The images with browser frames were created using{" "}
          <a href="https://browserframe.com">Browserframe</a>.
        </Text>
      </div>
    </Slide>
  );
}

export default Intro;
