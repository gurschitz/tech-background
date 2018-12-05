import React from "react";
import Enter from "./Enter";
import useKeyPressCount from "./useKeyPressCount";

export interface IAppearableElement {
  children: React.ReactNode;
  priority?: number;
}

type AppearableElement = React.ReactElement<IAppearableElement>;
type AppearableElements = Array<AppearableElement>;

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

  // collect priorites from element props with fallback to index
  let priorities: Array<number> = appearableElements.map(
    (element, index) => element.props.priority || index
  );

  // make priorities unique
  priorities = [...new Set(priorities)];

  const priorityIndex = useKeyPressCount({
    from: -1, // we start at -1 because we use it as an array index, and 0 would equal the first priority
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

export default AppearInOrder;
