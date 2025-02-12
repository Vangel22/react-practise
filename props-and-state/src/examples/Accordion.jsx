import { useState } from "react";

// How we can pass state through components
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazahstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam
        commodi incidunt quae rerum, repellat, quo consectetur est voluptas,
        voluptatum in. Quas dignissimos minima maxime ut laudantium porro ea
        corrupti?
      </Panel>

      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam
        commodi incidunt quae rerum, repellat, quo consectetur est voluptas,
        voluptatum in. Quas dignissimos minima maxime ut laudantium porro ea
        corrupti?
      </Panel>
    </>
  );
}

function Panel({ children, title, isActive, onShow }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
