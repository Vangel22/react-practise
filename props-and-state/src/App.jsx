import "./App.css";
import { FirstApp } from "./components/FirstApp";
import { Playing } from "./components/Playing";
import { Profile } from "./components/Profile";
import { EventExample } from "./components/EventPropagation";

function App() {
  const onSmash = () => {
    alert("Smashed");
  };
  return (
    // <FirstApp
    //   onSmash={onSmash}
    //   title={"vangel"}
    //   subTitle={"Testing"}
    //   name={"proba"}
    // />
    // <Playing />
    <EventExample />
  );
}

export default App;
