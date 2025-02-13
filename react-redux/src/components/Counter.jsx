import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../state/counter/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync(50))}>
        Increment async
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
