import React from "react";
import { Slide, Heading } from "spectacle";
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
          <Heading size={2}>Questions?</Heading>
        </Typist>
      </div>
    </Slide>
  );
}

export default Intro;
