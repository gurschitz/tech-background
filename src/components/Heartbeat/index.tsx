import React, { useState, useEffect } from "react";
import HearbeatContainer from "./HeartbeatContainer";

interface IHeartbeatProps {
  speed: number;
  children: React.ReactNode;
}

function Heartbeat({ children, speed }: IHeartbeatProps) {
  const [pulse, setPulse] = useState(false);

  useEffect(
    () => {
      const interval = setInterval(() => {
        setPulse(prev => !prev);
      }, speed);

      return () => {
        clearInterval(interval);
      };
    },
    [pulse]
  );

  const pose = pulse ? "pulse" : "default";
  return <HearbeatContainer pose={pose}>{children}</HearbeatContainer>;
}

export default Heartbeat;
