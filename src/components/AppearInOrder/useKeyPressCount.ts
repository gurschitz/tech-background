import { useState } from "react";
import useKey from "use-key-hook";

interface IUseKeyPressCount {
  from: number;
  to: number;
  incrementKey: string | number;
  decrementKey: string | number;
}

function useKeyPressCount({
  from,
  to,
  incrementKey,
  decrementKey
}: IUseKeyPressCount) {
  const [currentValue, setCurrentValue] = useState(from);
  const detectKeys = [incrementKey, decrementKey];

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
      detectKeys
    }
  );

  return currentValue;
}

export default useKeyPressCount;
