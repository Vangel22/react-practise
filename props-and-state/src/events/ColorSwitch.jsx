import { useState } from "react";
import PropTypes from "prop-types";

export function Switch() {
  const [color, setColor] = useState("#fff00");
  const handleColorChange = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
    // setColor(prev => prev);
  };

  return (
    <div style={{ height: 400, width: 400, backgroundColor: color }}>
      <ColorSwitch onChangeColor={handleColorChange} />
    </div>
  );
}

function ColorSwitch({ onChangeColor }) {
  return <button onClick={onChangeColor}>Change color</button>;
}

// Add PropType for ColorSwitch
// Make the function be able to change the color
ColorSwitch.propTypes = {
  onChangeColor: PropTypes.func,
};
