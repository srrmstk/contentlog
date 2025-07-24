import { useReducer } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, toggleValue] = useReducer(
    (prevValue) => !prevValue,
    initialValue
  );

  return [value, toggleValue];
};
