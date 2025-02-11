import "./App.css";
import { FirstApp } from "./components/FirstApp";
import { Playing } from "./components/Playing";
import { Profile } from "./components/Profile";
import { EventExample } from "./components/EventPropagation";
import LightSwitch from "./events/LightSwitch";
import { Switch } from "./events/ColorSwitch";
import { Counter } from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  const onSmash = () => {
    alert("Smashed");
  };

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
      <TodoList todos={todos} />
    </>
  );
}

export default App;
