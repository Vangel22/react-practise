import { useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./components/Counter";
// import { Tasks } from "./components/Tasks";

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      {/* <Tasks /> */}
      <h1>Redux store</h1>
      <Counter />
      <h3>I am in app component: {count}</h3>
    </>
  );
}

export default App;
