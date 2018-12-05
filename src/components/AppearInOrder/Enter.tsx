import React from "react";
import { Transition } from "react-spring";

interface IEnterProps {
  show: boolean;
  children: React.ReactNode;
  from?: React.CSSProperties;
  enter?: React.CSSProperties;
  leave?: React.CSSProperties;
}

function Enter({
  show,
  children,
  from = { opacity: 0 },
  enter = { opacity: 1 },
  leave = { opacity: 0 }
}: IEnterProps) {
  return (
    <Transition items={show} from={from} enter={enter} leave={leave}>
      {show => props => (show ? <div style={props}>{children}</div> : null)}
    </Transition>
  );
}

export default Enter;
