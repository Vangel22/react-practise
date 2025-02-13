import { useDispatch, useSelector } from "react-redux";
import { increment } from "../state/counter/counterSlice";

export const Counter = () => {
  const dispath = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Counter is {count}</h1>
      <button onClick={() => dispath(increment())}>Increment</button>
    </div>
  );
};
