import { useState } from "react";
import useKey from "use-key-hook";

interface IUseKeyPressCount {
  from: number;
  to: number;
  incrementKey: string | number;
  decrementKey: string | number;
}

function useKeyPressCount({
  from = 1,
  to = 2,
  incrementKey,
  decrementKey
}: IUseKeyPressCount) {
  const [currentValue, setCurrentValue] = useState(from);

  useKey(
    (pressedKey: string | number) => {
      if (pressedKey === decrementKey) {
        setCurrentValue(prevState => {
          if (prevState > from) {
            return prevState - 1;
          }
          return prevState;
        });
      }
      if (pressedKey === incrementKey) {
        setCurrentValue(prevState => {
          if (prevState < to) {
            return prevState + 1;
          }
          return prevState;
        });
      }
    },
    {
      detectKeys: [incrementKey, decrementKey]
    }
  );

  return currentValue;
}

export default useKeyPressCount;
