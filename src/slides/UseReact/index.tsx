import React from "react";
import { Slide, Text } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";
import Heartbeat from "../../components/Heartbeat";

function UseReact() {
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
          <Heartbeat speed={800}>💙</Heartbeat>
          <span className="ml2">React</span>
        </div>

        <AppearInOrder>
          <div className="mt4">
            <Text>
              <strong>usereact.io</strong>: React course in Amstetten / Lower
              Austria
            </Text>
          </div>
        </AppearInOrder>
      </div>
    </Slide>
  );
}

export default UseReact;
