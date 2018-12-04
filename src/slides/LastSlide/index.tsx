import React from "react";
import { Slide, Text } from "spectacle";

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
        <Text>
          This presentation was built using{" "}
          <a href="https://github.com/facebook/react">React</a> and{" "}
          <a href="https://github.com/FormidableLabs/spectacle">Spectacle</a>. The source code can be found here: <a href="https://github.com/gurschitz/tech-background">https://github.com/gurschitz/tech-background</a>
        </Text>
      </div>
    </Slide>
  );
}

export default Intro;
