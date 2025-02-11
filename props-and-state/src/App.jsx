import "./App.css";
import { FirstApp } from "./components/FirstApp";
import { Playing } from "./components/Playing";
import { Profile } from "./components/Profile";
import { EventExample } from "./components/EventPropagation";
import LightSwitch from "./events/LightSwitch";
import { Switch } from "./events/ColorSwitch";
import { Counter } from "./components/Counter";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { TrafficLight } from "./components/TrafficLight";

function App() {
  const onSmash = () => {
    alert("Smashed");
  };

  // const [movies, setMovies] = useState([]);

  // component will render on every mount
  // useEffect(() => {
  // });

  // component will render only on first mount
  // useEffect(() => {},[])

  // component will update on dependecy change
  // useEffect(() => {}, [movies]);

  // const ref = useRef();
  // ref.current.focus();

  const todos = [
    {
      title: "Todo 1",
      content: "testing",
    },
    {
      title: "Todo 2",
      content: "testing",
    },
    {
      title: "Todo 3",
      content: "testing",
    },
  ];

  return (
    // <FirstApp
    //   onSmash={onSmash}
    //   title={"vangel"}
    //   subTitle={"Testing"}
    //   name={"proba"}
    // />
    // <Playing />
    // <EventExample />
    <>
      {/* <LightSwitch /> */}
      {/* <Switch /> */}
      {/* <Counter /> */}
      {/* <TodoList todos={todos} /> */}
      <TrafficLight />
      {/* <input ref={ref} */}
    </>
  );
}

export default App;
