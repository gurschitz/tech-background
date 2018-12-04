import React from "react";
import Enter from "../Enter";
import AppearableElement, { IAppearableElement } from "./AppearableElement";
import useKeyPressCount from "../../hooks/useKeyPressCount";

type AppearableElement = React.ReactElement<IAppearableElement>;
type AppearableElements = Array<React.ReactElement<IAppearableElement>>;

interface IAppearInOrderProps {
  startsWith?: number;
  decrementKey?: number;
  incrementKey?: number;
  children: AppearableElement | AppearableElements;
  from?: React.CSSProperties;
  enter?: React.CSSProperties;
  leave?: React.CSSProperties;
}

function AppearInOrder({
  startsWith = 0,
  children,
  from,
  enter,
  leave,
  decrementKey = 38,
  incrementKey = 40
}: IAppearInOrderProps) {
  const appearableElements: AppearableElements = React.Children.map(
    React.Children.toArray(children),
    element => {
      if (React.isValidElement<IAppearableElement>(element)) {
        return element;
      }
      return null;
    }
  ).filter((p): p is AppearableElement => !!p);

  let priorities: Array<number> = appearableElements.map(
    (element, index) => element.props.priority || index
  );

  // Make priorities unique
  priorities = [...new Set(priorities)];

  const priorityIndex = useKeyPressCount({
    from: -1, // we start at -1 because this is the index, and 0 would equal the first priority
    to: priorities.length - 1,
    decrementKey,
    incrementKey
  });

  const elements = appearableElements.map((element, index) => {
    const priority = element.props.priority || index;

    return (
      <Enter
        key={index}
        show={priorities[priorityIndex] >= priority}
        children={element}
        from={from}
        enter={enter}
        leave={leave}
      />
    );
  });

  return <>{elements}</>;
}

AppearInOrder.Element = AppearableElement;

export default AppearInOrder;
