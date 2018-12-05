import React, { useState, useEffect } from "react";
import { Slide, Text } from "spectacle";
import posed from "react-pose";
import AppearInOrder from "../../components/AppearInOrder";

const Heartbeat = posed.div({
  small: { scale: 1 },
  big: { scale: 1.2 }
});

function Heart() {
  const [state, setState] = useState<"small" | "big">("small");
  useEffect(
    () => {
      const interval = setInterval(() => {
        if (state === "small") {
          setState("big");
        } else {
          setState("small");
        }
      }, 800);

      return () => {
        clearInterval(interval);
      };
    },
    [state]
  );

  console.log(state);
  return (
    <Slide align="center center">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            fontSize: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Heartbeat pose={state}>💙</Heartbeat>
          <span className="ml2">React</span>
        </div>

        <AppearInOrder>
          <div className="mt4">
            <Text>
              <strong>usereact.io</strong>: React course in Amstetten
            </Text>
          </div>
        </AppearInOrder>
      </div>
    </Slide>
  );
}

export default Heart;
